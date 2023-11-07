import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedFeed from '../queries/getItemsPaginatedFeed';
import RSS from 'rss';
import path from 'path';
import fs from 'fs';
import { DEFAULT_LOCALE, LOCALES } from '../../../../../src/apps/client/constants';

export default function (req, res) {
    const { page, size, sort } = req.query;
    try {
        getItemsPaginatedFeed(page, size, sort)
            .then((items) => {
                LOCALES.forEach(async (locale) => {
                    const isDefaultLocale = locale === DEFAULT_LOCALE;
                    const articles = { paginatedResults: items, totalCount: 0 };
                    const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL;
                    // create a new feed object
                    const feed = new RSS({
                        title: 'News RSS feed',
                        description: 'All our news in one place.',
                        feed_url: `${DOMAIN}/feed/${locale}/rss.xml`,
                        site_url: `${DOMAIN}${isDefaultLocale ? '' : `/${locale}`}`,
                        copyright: '(c) 2022 New San Cai',
                        language: locale,
                        image_url: `${DOMAIN}/public/images/favicon.ico`
                    });

                    articles.paginatedResults.forEach(article => {
                        feed.item({
                            title: article.data[locale].title,
                            // eslint-disable-next-line max-len
                            description: `${article.data[locale].shortDescription} <img src="${DOMAIN}${article.data[locale].avatar[0].path}" alt="${article.data[locale].title}">`,
                            author: article.author?.data[locale].name,
                            date: new Date(article.data[locale].date),
                            categories: [article.category?.data[locale].name],
                            url: `${DOMAIN}${isDefaultLocale ? '' : `/${locale}`}/${article.data[locale].alias}`
                        });
                    });

                    const fullFilePath = path.join(process.cwd(), 'public', 'feed', `${locale}`, 'rss.xml');

                    // remove the old file
                    if (fs.existsSync(fullFilePath)) {
                        await fs.promises.unlink(fullFilePath);
                    }

                    fs.writeFile(fullFilePath, feed.xml(), err => {
                        if (err) {
                            // eslint-disable-next-line no-console
                            console.log('Error: ', err);
                        }
                        // eslint-disable-next-line no-console
                        console.log('RSS feed generation: all good');
                    });
                });

                res.status(OKAY_STATUS_CODE).end();
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
