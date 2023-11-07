import { SET_ARTICLE } from '../types/types';

const setArticle = payload => ({
    type: SET_ARTICLE,
    payload
});

export default setArticle;
