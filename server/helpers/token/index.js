import jsonwebtoken from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const privateKey = fs.readFileSync(path.resolve(__dirname, '../../privateKeys/privateKey.ppk'), 'utf8');
const publicKey = fs.readFileSync(path.resolve(__dirname, '../../privateKeys/publicKey.ppk'), 'utf8');

export const generateToken = (data, expiresIn) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(data, privateKey, {
            algorithm: 'RS256',
            expiresIn
        }, (err, token) => {
            if (err || !token) {
                return reject(err);
            }

            resolve(token);
        });
    });
};

export const verifyToken = token => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, publicKey, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

export const getTokenFromAuthorization = authorizationHeader => {
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        return authorizationHeader.slice(7);
    } else {
        return null;
    }
};
