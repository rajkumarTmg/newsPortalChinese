/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const parseISO = require('date-fns/parseISO');
const isValid = require('date-fns/isValid');
const cliSelect = require('cli-select');
const { MongoTools } = require('node-mongotools');

const mongoTools = new MongoTools();

const DATABASE_URL = 'mongodb://localhost/new-san-cai';

const BACKUPS_FOLDER = path.join(__dirname, '..', '..', 'backups');

if (fs.existsSync(BACKUPS_FOLDER)) {
    const options = fs.readdirSync(BACKUPS_FOLDER)
        .map(fileName => {
            const fileDateStr = fileName
                .replace('dump-', '')
                .replace('.gz', '')
                .replace('_', ' ');
            const fileDate = parseISO(fileDateStr);
            const isFileValid = isValid(fileDate);

            return {
                name: fileName,
                date: isFileValid ? +fileDate : 0,
                isValid: isFileValid
            };
        })
        .filter(file => file.isValid)
        .sort((prevItem, nextItem) => nextItem.date - prevItem.date)
        .map(file => file.name);

    if (options.length) {
        cliSelect({ values: options })
            .then((response) => {
                const mtOptions = {
                    uri: DATABASE_URL,
                    dropBeforeRestore: true,
                    dumpFile: path.join(BACKUPS_FOLDER, response.value)
                };
                mongoTools.mongorestore(mtOptions)
                    .then(() => console.log('Success!'))
                    .catch(err => console.log('Error', err));
            })
            .catch(() => {
                console.log('Something went wrong');
            });
    } else {
        console.log('No backups found');
    }
} else {
    console.log('No backups found');
}
