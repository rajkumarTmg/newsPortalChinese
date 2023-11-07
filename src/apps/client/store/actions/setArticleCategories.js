import { SET_ARTICLE_CATEGORIES } from '../types/types';

const setArticleCategories = payload => ({
    type: SET_ARTICLE_CATEGORIES,
    payload
});

export default setArticleCategories;
