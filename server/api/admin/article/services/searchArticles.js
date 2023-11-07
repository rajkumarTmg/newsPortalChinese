import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import searchArticles from '../../../client/article/queries/searchArticles';

export default function (req, res) {
    const { searchText, categoryId, subcategoryId } = req.query;
    try {
        searchArticles(searchText, categoryId, subcategoryId).then(items =>
            res.status(OKAY_STATUS_CODE).send(items));
    } catch (error) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
