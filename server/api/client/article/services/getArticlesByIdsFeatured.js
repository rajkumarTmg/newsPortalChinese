import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getArticlesByIds from '../queries/getItemsByIds';
import getPostsByIds from '../../post/queries/getItemsByIds';
import getPages from '../../page/queries/getPages';

export default function (req, res) {
    const { locale } = req.query;
    try {
        getPages(locale).then((pages) => {
            const mainPage = pages.find(page => page.pageId === 'main').data[locale];

            if (!mainPage) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const idsArticles = [
                ...(mainPage.featuredTopMain || []),
                ...(mainPage.featuredTopSub || []),
                ...(mainPage.featuredBottom || []),
                ...(mainPage.featuredRight || []),
                ...(mainPage.featuredBottomVote || []),
                ...(mainPage.featuredRightList || []),
                ...(mainPage.featuredCommentarySection || [])
            ].filter(item => !!item).join(',');

            const idsPosts = [...mainPage.featuredVideo].filter(item => !!item).join(',');

            if (!idsArticles && !idsPosts) {
                return res.status(OKAY_STATUS_CODE).send({ articles: [], posts: [] });
            }

            Promise.all([
                idsArticles && getArticlesByIds(idsArticles, locale),
                idsPosts && getPostsByIds(idsPosts, locale)
            ])
                .then(([articles, posts]) => {
                    res.status(OKAY_STATUS_CODE).send({ articles: articles || null, posts: posts || null });
                })
                .catch(() => {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                });
        })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
