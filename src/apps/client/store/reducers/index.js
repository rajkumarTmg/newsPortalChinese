import { combineReducers } from 'redux';

import application from './application';
import data from './data';
import commercial from './commercial';

const reducers = combineReducers({
    application,
    data,
    commercial
});

export default reducers;
