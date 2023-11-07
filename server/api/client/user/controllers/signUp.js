import {
    OKAY_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    TOKEN_EXPIRES_IN
} from '../../../../constants';

import saveUserQuery from '../queries/saveUser';
import getUserByEmailOrUsername from '../queries/getUserByEmailOrUsername';

import md5 from 'md5';

import validate from '../../../../helpers/validation/validate';
import normalizeEmail from '../../../../utils/normalizeEmail';
import { userValidation } from '../utils/validation';
import { generateToken } from '../../../../helpers/token';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import getEmailTemplate from '../../../../utils/getEmailTemplate';

const MAIL_CONTENT = {
    en: 'Please click on the link below to activate your account',
    'zh-cn': '请点击以下链接激活您的帐户',
    'zh-tw': '請點擊以下鏈接激活您的帐户'
};

const MAIL_TITLE = {
    en: 'Welcome to Sancairen!',
    'zh-cn': '欢迎加入三才人！',
    'zh-tw': '歡迎加入三才人！'
};

const TITLE = {
    en: 'Confirm New San Cai Account',
    'zh-cn': '三才人账户确认',
    'zh-tw': '三才人帳戶確認'
};

export default async (req, res) => {
    try {
        const {
            email = '',
            password,
            phone,
            firstName,
            lastName,
            userName,
            city,
            country,
            gender,
            birthdate,
            hobby,
            draft,
            locale
        } = req.body;

        const normalizedEmail = normalizeEmail(email);

        const existingUser = await getUserByEmailOrUsername(normalizedEmail, userName);

        if (existingUser) {
            const isNotUniqueUsername = existingUser.userName === userName;
            return res.status(BAD_REQUEST_STATUS_CODE).send({ error: `This ${isNotUniqueUsername ? 'username' : 'email'} is already in use` });
        }

        const now = Date.now();
        const user = {
            email: normalizedEmail,
            notNormalizedEmail: email,
            password,
            createdAt: now,
            phone,
            firstName,
            lastName,
            userName,
            city,
            country,
            gender,
            birthdate,
            hobby,
            draft
        };
        const isValid = validate(user, userValidation);

        if (!isValid) {
            return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'User is not valid' });
        }

        if (user.password) {
            user.password = md5(user.password);
        }

        saveUserQuery(user)
            .then(async user => {
                const token = await generateToken({ _id: user._id, tokenType: TOKENS_TYPES.userVerifyEmail }, TOKEN_EXPIRES_IN.userVerifyEmail);
                const restoreLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}?verify-token=${token}`;
                try {
                    sendEmail(user.email, {
                        subject: TITLE[locale],
                        content: getEmailTemplate({
                            domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                            content: MAIL_CONTENT[locale],
                            link: restoreLink,
                            title: MAIL_TITLE[locale],
                            lang: locale
                        }),
                        files: [
                            {
                                filename: 'logoMobile.png',
                                path: './public/images/logoMobile.png',
                                cid: 'logo'
                            },
                            {
                                filename: 'smallClouds.png',
                                path: './public/images/smallClouds.png',
                                cid: 'clouds'
                            }
                        ]
                    });
                } catch (e) {
                    // console.log(e);
                    return res.status(BAD_REQUEST_STATUS_CODE).end();
                }

                return res.status(OKAY_STATUS_CODE).end();
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
