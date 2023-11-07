import fs from 'fs';
import rimraf from 'rimraf';
import tar from 'tar';
import path from 'path';

import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE, DB_TEMP_FILES_FOLDER_PATH, FILES_FOLDER_PATH } from '../../../../constants';

export default function downloadFiles (req, res) {
    try {
        if (fs.existsSync(DB_TEMP_FILES_FOLDER_PATH)) {
            rimraf.sync(DB_TEMP_FILES_FOLDER_PATH);
        }
        fs.mkdirSync(DB_TEMP_FILES_FOLDER_PATH);

        tar.create(
            { file: `${DB_TEMP_FILES_FOLDER_PATH}/files.tar`, C: path.join(FILES_FOLDER_PATH, '..') },
            ['files']
        )
            .then(err => {
                if (err) {
                    return res.status(SERVER_ERROR_STATUS_CODE).end();
                }

                const host = req.get('host');

                res.status(OKAY_STATUS_CODE).send(`${req.protocol}://${host}/server/api/admin/db/temp/files.tar`);
            })
            .catch(() => {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        return res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
