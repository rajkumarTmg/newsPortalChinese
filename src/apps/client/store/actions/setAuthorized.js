import { SET_AUTHORIZED } from '../types/types';

const setAuthorized = payload => ({
    type: SET_AUTHORIZED,
    payload
});

export default setAuthorized;
