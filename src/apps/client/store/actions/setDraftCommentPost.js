import { SET_DRAFT_COMMENT_POST } from '../types/types';

const setDraftCommentPost = payload => ({
    type: SET_DRAFT_COMMENT_POST,
    payload
});

export default setDraftCommentPost;
