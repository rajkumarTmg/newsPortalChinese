import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE, DATABASE_URL, FILES_FOLDER_PATH } from '../../../../constants';

import { MongoTools } from 'node-mongotools';
import path from 'path';

import multipart from '../../../../helpers/files/multipart';

const uploader = multipart();
const mongoTools = new MongoTools();

export default function upload (req, res) {
    try {
        uploader(req, res, (err) => {
            if (err || !req.files[0]) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const file = req.files[0];

            const mtOptions = {
                uri: DATABASE_URL,
                dropBeforeRestore: true,
                deleteDumpAfterRestore: true,
                dumpFile: path.join(FILES_FOLDER_PATH, file.filename)
            };

            mongoTools.mongorestore(mtOptions)
                .then(() => {
                    res.status(OKAY_STATUS_CODE).end();
                })
                .catch(err => {
                    return res.status(SERVER_ERROR_STATUS_CODE).send(err);
                });
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
