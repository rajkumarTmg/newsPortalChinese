import { SET_DRAFT_VOTE } from '../types/types';

const setDraftVote = payload => ({
    type: SET_DRAFT_VOTE,
    payload
});

export default setDraftVote;
