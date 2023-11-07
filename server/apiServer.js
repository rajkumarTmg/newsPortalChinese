import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

import backups from './helpers/backup/backups';

import { DATABASE_URL, FILES_FOLDER, FILES_FOLDER_PATH, SEEDS_FOLDER, SEEDS_FOLDER_PATH, DB_TEMP_FILES_FOLDER, DB_TEMP_FILES_FOLDER_PATH } from './constants';
import { OLD_FILES_FOLDER, OLD_FILES_FOLDER_PATH } from '../sqlTransformer/constants';

import adminAdminApi from './api/admin/admin';
import adminPageApi from './api/admin/page';
import clientPageApi from './api/client/page';
import adminExampleApi from './api/admin/example';
import clientExampleApi from './api/client/example';
import adminExampleWithCategoriesApi from './api/admin/exampleWithCategoriesApi';
import adminExampleWithSubcategoriesApi from './api/admin/exampleWithSubcategoriesApi';
import adminFilesApi from './api/admin/files';
import adminDbApi from './api/admin/db';
import clientCountriesApi from './api/client/countries';
import clientCitiesApi from './api/client/cities';
import adminCommercialApi from './api/admin/commercialApi';
import clientCommercialApi from './api/client/commercial';
import adminAuthorApi from './api/admin/author';
import clientAuthorApi from './api/client/author';
import adminArticleApi from './api/admin/article';
import clientArticleApi from './api/client/article';
import adminPostApi from './api/admin/post';
import clientPostApi from './api/client/post';
import clientUserApi from './api/client/user';
import adminVotesApi from './api/admin/votesApi';
import clientVotesApi from './api/client/votes';
import adminSubscriptionApi from './api/admin/subscription';
import clientSubscriptionApi from './api/client/subscription';
import updateVotesController from './utils/updateVotesController';

export default app => {
    // helmet
    app.use(helmet());

    // cors
    app.use(cors());

    // mongodb
    const db = mongoose.connection;

    db.on('error', function (error) {
        // eslint-disable-next-line
        console.log('Error in MongoDb connection: ' + error);
        mongoose.disconnect();
    });
    db.on('connected', function () {
        // eslint-disable-next-line
        console.log('MongoDB connected!', new Date().toLocaleString());
    });
    db.on('disconnected', function () {
        // eslint-disable-next-line
        console.log('MongoDB disconnected!', new Date().toLocaleString());
        setTimeout(() => {
            mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
        }, 500);
    });
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

    backups();

    // static
    app.use(compression());

    // parsers
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(bodyParser.json({ limit: '50mb', extended: true }));
    app.use(cookieParser());

    // static
    app.use(`/${FILES_FOLDER}`, express.static(FILES_FOLDER_PATH));
    app.use(`/${SEEDS_FOLDER}`, express.static(SEEDS_FOLDER_PATH));
    app.use(`/${DB_TEMP_FILES_FOLDER}`, express.static(DB_TEMP_FILES_FOLDER_PATH));
    app.use(`/${OLD_FILES_FOLDER}`, express.static(OLD_FILES_FOLDER_PATH));
    // api
    app.use('/api/admin/admin', adminAdminApi);
    app.use('/api/admin/example', adminExampleApi);
    app.use('/api/client/example', clientExampleApi);
    app.use('/api/admin/page', adminPageApi);
    app.use('/api/client/page', clientPageApi);
    app.use('/api/admin/example-with-categories', adminExampleWithCategoriesApi);
    app.use('/api/admin/example-with-subcategories', adminExampleWithSubcategoriesApi);
    app.use('/api/admin/files', adminFilesApi);
    app.use('/api/admin/db', adminDbApi);
    app.use('/api/client/countries', clientCountriesApi);
    app.use('/api/client/cities', clientCitiesApi);
    app.use('/api/admin/commercialApi', adminCommercialApi);
    app.use('/api/client/commercial', clientCommercialApi);
    app.use('/api/admin/author', adminAuthorApi);
    app.use('/api/client/author', clientAuthorApi);
    app.use('/api/admin/article', adminArticleApi);
    app.use('/api/client/article', clientArticleApi);
    app.use('/api/admin/post', adminPostApi);
    app.use('/api/client/post', clientPostApi);
    app.use('/api/client/user', clientUserApi);
    app.use('/api/admin/votesApi', adminVotesApi);
    app.use('/api/client/votesApi', clientVotesApi);
    app.use('/api/admin/subscription', adminSubscriptionApi);
    app.use('/api/client/subscription', clientSubscriptionApi);

    // update votes results emails sending
    updateVotesController.updateVotesEmails();
};
