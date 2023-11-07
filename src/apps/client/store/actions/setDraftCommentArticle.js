import { SET_DRAFT_COMMENT_ARTICLE } from '../types/types';

const setDraftCommentArticle = payload => ({
    type: SET_DRAFT_COMMENT_ARTICLE,
    payload
});

export default setDraftCommentArticle;
