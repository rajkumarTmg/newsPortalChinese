/* eslint-disable max-len */
const md5 = require('md5');
const { getObjectId } = require('mongo-seeding');

module.exports = [
    {
        _id: getObjectId('user'),
        email: 'user@gmail.com',
        notNormalizedEmail: 'user@gmail.com',
        password: md5('password'),
        verified: true
    },
    {
        _id: getObjectId('user1'),
        email: 'user1@gmail.com',
        notNormalizedEmail: 'user1@gmail.com',
        password: md5('password'),
        verified: true
    }
];
