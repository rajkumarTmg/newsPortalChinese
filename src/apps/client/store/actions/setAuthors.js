import { SET_AUTHORS } from '../types/types';

const setAuthors = payload => ({
    type: SET_AUTHORS,
    payload
});

export default setAuthors;
