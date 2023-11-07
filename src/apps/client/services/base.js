import pathOr from 'ramda/src/pathOr';

import superagentPrefix from 'superagent-prefix';

const prefix = superagentPrefix(process.env.NEXT_PUBLIC_API_URL);

export default function base (request) {
    return new Promise((resolve, reject) => {
        request
            .use(prefix)
            .end((err, res) => {
                if (err) {
                    return reject(pathOr({}, ['response', 'body'], err));
                }

                resolve(res.body || res.text);
            });
    });
}
