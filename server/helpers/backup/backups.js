import schedule from 'node-schedule';
import path from 'path';
import fs from 'fs';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import isValid from 'date-fns/isValid';
import rimraf from 'rimraf';
import { MongoTools } from 'node-mongotools';

import { DATABASE_URL } from '../../constants';

const mongoTools = new MongoTools();

export const getFileName = time => {
    return `dump-${format(time, 'yyyy-MM-dd_HH:mm:ss')}.gz`;
};

const BACKUPS_FOLDER = path.join(__dirname, 'backups');
const BACKUPS_NUMBER = 10;

const removeOldBackups = () => {
    fs.readdirSync(BACKUPS_FOLDER)
        .map(fileName => {
            const fileDateStr = fileName.replace('dump-', '').replace('.gz', '');
            const fileDate = parseISO(fileDateStr);

            const isFileValid = isValid(fileDate);

            return {
                name: fileName,
                date: isFileValid ? +fileDate : 0,
                isValid: isFileValid
            };
        })
        .sort((prevItem, nextItem) => nextItem.date - prevItem.date)
        .forEach((file, i) => {
            if (i > BACKUPS_NUMBER - 1 || !file.isValid) {
                rimraf.sync(path.join(BACKUPS_FOLDER, file.name));
            }
        });
};

export default function () {
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    if (!fs.existsSync(BACKUPS_FOLDER)) {
        fs.mkdirSync(BACKUPS_FOLDER);
    }

    removeOldBackups();

    schedule.scheduleJob({ hour: 2, minute: 0 }, (time) => {
        const dumpFileName = getFileName(time);

        const mtOptions = {
            uri: DATABASE_URL,
            path: BACKUPS_FOLDER,
            fileName: dumpFileName
        };

        mongoTools.mongodump(mtOptions);
    });
}
