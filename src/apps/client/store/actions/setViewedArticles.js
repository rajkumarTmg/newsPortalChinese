import { SET_VIEWED_ARTICLES } from '../types/types';

const setViewedArticles = payload => ({
    type: SET_VIEWED_ARTICLES,
    payload
});

export default setViewedArticles;
