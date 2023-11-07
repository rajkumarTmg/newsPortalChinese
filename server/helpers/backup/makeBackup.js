/* eslint-disable no-console */
const path = require('path');
const format = require('date-fns/format');
const { MongoTools } = require('node-mongotools');

const mongoTools = new MongoTools();

const DATABASE_URL = 'mongodb://localhost/new-san-cai';
const BACKUPS_FOLDER = path.join(__dirname, '..', '..', 'backups');

const getFileName = time => {
    return `dump-${format(time, 'yyyy-MM-dd_HH:mm:ss')}`;
};

const mtOptions = {
    uri: DATABASE_URL,
    path: BACKUPS_FOLDER,
    fileName: `${getFileName(new Date())}.gz`
};

mongoTools.mongodump(mtOptions)
    .then(() => console.log('Success!'))
    .catch(err => console.log('Error', err));
