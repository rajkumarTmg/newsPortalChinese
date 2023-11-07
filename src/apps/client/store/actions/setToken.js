import { SET_TOKEN } from '../types/types';

const setToken = payload => ({
    type: SET_TOKEN,
    payload
});

export default setToken;
