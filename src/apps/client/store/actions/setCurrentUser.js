import { SET_CURRENT_USER } from '../types/types';

const setCurrentUser = payload => ({
    type: SET_CURRENT_USER,
    payload
});

export default setCurrentUser;
