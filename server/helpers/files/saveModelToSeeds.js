import fs from 'fs';
import path from 'path';

export default function saveModelToSeeds (folderName) {
    const Model = require(`../api/client/${folderName}/model`).default;

    Model.find({})
        .then(items => {
            const folderPath = path.join(__dirname, `../seeds/data/${folderName}`);
            const filePath = path.join(folderPath, 'index.js');

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            const content = `/* eslint-disable */

module.exports = ${JSON.stringify(items)};
`;

            if (!fs.existsSync(filePath)) {
                fs.appendFile(filePath, content, 'utf-8', function (err) {
                    if (err) throw err;
                    // eslint-disable-next-line no-console
                    console.log(`Model ${folderName} was successfully saved to seeds`);
                });
            } else {
                fs.writeFile(filePath, content, 'utf-8', function (err) {
                    if (err) throw err;
                    // eslint-disable-next-line no-console
                    console.log(`Model ${folderName} was successfully saved to seeds`);
                });
            }
        });
}
