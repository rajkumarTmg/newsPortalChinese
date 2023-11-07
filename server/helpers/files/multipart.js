import fs from 'fs';
import path from 'path';
import multer from 'multer';

import { FILES_FOLDER_PATH } from '../../constants';

export default function multipart () {
    const destinationPath = path.resolve(__dirname, '..', '..', FILES_FOLDER_PATH);

    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath);
    }
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, FILES_FOLDER_PATH);
        },
        filename: function (req, file, cb) {
            const extname = path.extname(file.originalname);
            const fileNameWithoutExt = file.originalname.slice(0, -(extname.length)).replace(/\s\s+/g, ' ').split(' ').join('_');

            cb(null, `${fileNameWithoutExt}-${Date.now()}${extname}`);
        }
    });

    return multer({ storage }).any();
}
