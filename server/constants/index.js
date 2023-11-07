import path from 'path';

export const OKAY_STATUS_CODE = 200;
export const BAD_REQUEST_STATUS_CODE = 400;
export const FORBIDDEN_STATUS_CODE = 403;
export const NOT_FOUND_STATUS_CODE = 404;
export const SERVER_ERROR_STATUS_CODE = 500;
export const MONGODB_DUPLICATE_CODE = 11000;

export const DATABASE_URL = 'mongodb://localhost/new-san-cai';

export const FILES_FOLDER = 'server/files';
export const FILES_FOLDER_PATH = path.resolve(__dirname, '../files');

export const SEEDS_FOLDER = 'server/seeds';
export const SEEDS_FOLDER_PATH = path.resolve(__dirname, '../seeds');

export const DB_TEMP_FILES_FOLDER = 'server/api/admin/db/temp';
export const DB_TEMP_FILES_FOLDER_PATH = path.resolve(__dirname, '../api/admin/db/temp');

export const TOKENS_TYPES = {
    adminAuthorization: 'adminAuthorization',
    adminRestorePassword: 'adminRestorePassword',
    userAuthorization: 'userAuthorization',
    userRestorePassword: 'userRestorePassword',
    userVerifyEmail: 'userVerifyEmail',
    subscriptionVerifyEmail: 'subscriptionVerifyEmail',
    subscriptionVerifyUnsubscribe: 'subscriptionVerifyUnsubscribe'
};

export const TOKEN_EXPIRES_IN = {
    adminAuthorization: '24h',
    adminRestorePassword: '9999y',
    userAuthorization: '9999y',
    userRestorePassword: '9999y',
    userVerifyEmail: '9999y',
    subscriptionVerifyEmail: '9999y',
    subscriptionVerifyUnsubscribe: '9999y'
};
