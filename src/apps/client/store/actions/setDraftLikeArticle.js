import { SET_DRAFT_LIKE_ARTICLE } from '../types/types';

const setDraftLikeArticle = payload => ({
    type: SET_DRAFT_LIKE_ARTICLE,
    payload
});

export default setDraftLikeArticle;
