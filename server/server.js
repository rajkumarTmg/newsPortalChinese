import express from 'express';
import next from 'next';

import dotenv from 'dotenv';
import ip from 'ip';

import apiServer from './apiServer';

dotenv.config({ path: '.env.local' });

const isProd = process.env.NODE_ENV === 'production';
const isNextAppRun = (process.argv.find(arg => arg.indexOf('nextRun=') !== -1) || '').replace('nextRun=', '') === 'true';

const PORT = isProd ? 5000 : 4000;

if (isNextAppRun) {
    const app = next({ dev: false });
    const handle = app.getRequestHandler();

    app.prepare().then(() => {
        const server = express();

        apiServer(server);

        server.all('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(PORT, err => {
            if (err) throw err;
            console.log('Server is running on', `http://localhost:${PORT} or http://${ip.address()}:${PORT}`); // eslint-disable-line no-console
        });
    });
} else {
    const server = express();

    apiServer(server);

    server.listen(PORT, err => {
        if (err) throw err;
        console.log('Server is running on', `http://localhost:${PORT} or http://${ip.address()}:${PORT}`); // eslint-disable-line no-console
    });
}
