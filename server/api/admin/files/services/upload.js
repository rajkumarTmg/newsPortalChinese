import webpConverter from 'webp-converter';
import multipart from '../../../../helpers/files/multipart';

import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE, FILES_FOLDER } from '../../../../constants';
import fs from 'fs';
import uniqid from 'uniqid';

webpConverter.grant_permission();

const uploader = multipart();

const webpAvailableExtensions = ['png', 'jpeg', 'jpg'];

export default function update (req, res) {
    try {
        uploader(req, res, (err) => {
            if (err || !req.files[0]) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const file = req.files[0];
            const filePath = `/${FILES_FOLDER}/${file.filename}`;

            if (req.query.webp !== 'true') {
                return res.status(OKAY_STATUS_CODE).send({
                    path: filePath
                });
            }

            const splitedFilename = file.path.split('.');
            const extension = splitedFilename[splitedFilename.length - 1];

            if (!webpAvailableExtensions.includes(extension)) {
                return res.status(OKAY_STATUS_CODE).send({
                    path: filePath
                });
            }
            const uniqueId = uniqid();
            const filePathTemp = file.path.replace(`${file.filename.split('.').shift()}`, `${uniqueId}`);

            fs.rename(file.path, filePathTemp, (e) => {
                if (e) {
                    return res.status(SERVER_ERROR_STATUS_CODE).end();
                }

                const webpFilePath = `${splitedFilename.slice(0, -1).join('.')}.webp`;
                const webpFilePathTemp = webpFilePath.replace(`${file.filename.split('.').shift()}`, `${uniqueId}`);
                const webp = webpConverter.cwebp(filePathTemp, webpFilePathTemp);

                webp
                    .then(() => {
                        const filenameWithoutExt = file.filename.split('.').slice(0, -1).join('.');
                        const webFilePath = `/${FILES_FOLDER}/${filenameWithoutExt}.webp`;

                        fs.rename(filePathTemp, file.path, (e) => {
                            if (e) {
                                return res.status(SERVER_ERROR_STATUS_CODE).end();
                            }

                            fs.rename(webpFilePathTemp, webpFilePath, (e) => {
                                if (e) {
                                    return res.status(SERVER_ERROR_STATUS_CODE).end();
                                }

                                const isFile = fs.lstatSync(file.path).isFile();
                                const isFileWebp = fs.lstatSync(webpFilePath).isFile();

                                if (isFile && isFileWebp) {
                                    return res.status(OKAY_STATUS_CODE).send({
                                        path: filePath,
                                        pathWebp: webFilePath
                                    });
                                } else {
                                    return res.status(OKAY_STATUS_CODE).send({
                                        path: filePath
                                    });
                                }
                            });
                        });
                    })
                    .catch(() => {
                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    });
            });
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
