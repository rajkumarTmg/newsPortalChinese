import { SET_USER_LIKES } from '../types/types';

const setUserLikes = payload => ({
    type: SET_USER_LIKES,
    payload
});

export default setUserLikes;
