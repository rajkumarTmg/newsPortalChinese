import pathOr from 'ramda/src/pathOr';

export default function base (request, resProperty) {
    return new Promise((resolve, reject) => {
        request
            .end((err, res) => {
                if (err) {
                    return reject(pathOr({}, ['response', 'body'], err));
                }

                resolve(resProperty ? res[resProperty] : res.body || res.text);
            });
    });
}
