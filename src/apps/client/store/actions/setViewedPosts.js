import { SET_VIEWED_POSTS } from '../types/types';

const setViewedPosts = payload => ({
    type: SET_VIEWED_POSTS,
    payload
});

export default setViewedPosts;
