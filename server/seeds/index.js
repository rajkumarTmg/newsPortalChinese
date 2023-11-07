/* eslint-disable no-console */
const { Seeder } = require('mongo-seeding');
const packageJson = require('../../package.json');
const path = require('path');
const prompts = require('prompts');

const DATABASE_URL = 'mongodb://localhost/new-san-cai';

prompts({
    type: 'text',
    name: 'value',
    message: `Enter ${packageJson.name} to confirm`
})
    .then(response => {
        if (response.value !== packageJson.name) {
            console.log('Wrong project name');
            return;
        }

        const config = {
            database: DATABASE_URL,
            dropDatabase: true
        };

        const seeder = new Seeder(config);

        const collections = seeder.readCollectionsFromPath(path.resolve('server/seeds/data'));

        seeder
            .import(collections)
            .then(() => {
                console.log('Success!');
            })
            .catch(err => {
                console.log(err);
            });
    });
