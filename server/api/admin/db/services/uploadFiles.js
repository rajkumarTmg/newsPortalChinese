import tar from 'tar';
import rimraf from 'rimraf';
import path from 'path';

import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE, FILES_FOLDER_PATH } from '../../../../constants';

import multipart from '../../../../helpers/files/multipart';

const uploader = multipart();

export default function uploadFiles (req, res) {
    try {
        uploader(req, res, (err) => {
            if (err || !req.files[0]) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const file = req.files[0];
            const tarPath = `${FILES_FOLDER_PATH}/${file.filename}`;

            tar.extract(
                { file: tarPath, C: path.join(FILES_FOLDER_PATH, '..') }
            )
                .then(err => {
                    if (err) {
                        return res.status(SERVER_ERROR_STATUS_CODE).end();
                    }

                    rimraf.sync(tarPath);

                    res.status(OKAY_STATUS_CODE).end();
                })
                .catch(() => {
                    return res.status(SERVER_ERROR_STATUS_CODE).end();
                });
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
