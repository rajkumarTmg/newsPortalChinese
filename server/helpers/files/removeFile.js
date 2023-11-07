import fs from 'fs';
import path from 'path';

export default (filePath) => {
    if (!filePath) {
        return;
    }
    if (filePath.indexOf('/src/seeds/data/') === 0) {
        return;
    }

    const filePathFs = path.join(__dirname, '..', '..', filePath);

    fs.unlinkSync(filePathFs);
};
