import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    DATABASE_URL,
    DB_TEMP_FILES_FOLDER_PATH
} from '../../../../constants';

import { MongoTools } from 'node-mongotools';
import fs from 'fs';
import rimraf from 'rimraf';

import { getFileName } from '../../../../helpers/backup/backups';

const mongoTools = new MongoTools();

export default function download (req, res) {
    try {
        if (fs.existsSync(DB_TEMP_FILES_FOLDER_PATH)) {
            rimraf.sync(DB_TEMP_FILES_FOLDER_PATH);
        }
        fs.mkdirSync(DB_TEMP_FILES_FOLDER_PATH);

        const dumpFileName = getFileName(new Date());
        const mtOptions = {
            uri: DATABASE_URL,
            path: DB_TEMP_FILES_FOLDER_PATH,
            fileName: dumpFileName
        };

        mongoTools.mongodump(mtOptions)
            .then(() => {
                const host = req.get('host');

                res.status(OKAY_STATUS_CODE).send(`${req.protocol}://${host}/server/api/admin/db/temp/${dumpFileName}`);
            })
            .catch(err => {
                return res.status(SERVER_ERROR_STATUS_CODE).send(err);
            });
    } catch (e) {
        return res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
