import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    TOKENS_TYPES,
    TOKEN_EXPIRES_IN
} from '../../../../constants';
import { generateToken } from '../../../../helpers/token';

import normalizeEmail from '../../../../utils/normalizeEmail';
import md5 from 'md5';

import getUserByEmailOrUsername from '../queries/getUserByEmailOrUsername';
import getUserInfo from '../utils/getUserInfo';
import editUser from '../queries/editUser';
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

export default (req, res) => {
    try {
        const { email, password, locale } = req.body;

        getUserByEmailOrUsername(normalizeEmail(email), email)
            .then(async user => {
                if (!user) {
                    return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'No user found' });
                }

                if (!user.verified) {
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

                    return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'User is not verified', email: user.notNormalizedEmail });
                }

                if (md5(password) !== user.password) {
                    return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'Invalid password' });
                }

                const token = await generateToken({ _id: user._id, tokenType: TOKENS_TYPES.userAuthorization }, TOKEN_EXPIRES_IN.userAuthorization);
                const userData = { ...getUserInfo(user), draft: user.draft };

                if (Object.keys(user.draft).length) {
                    editUser(user._id, { draft: {} })
                        .then(() => {
                            return res.status(OKAY_STATUS_CODE).send({
                                token,
                                user: userData,
                                redirectUrl: user.draft?.redirectUrl
                            });
                        });
                } else {
                    return res.status(OKAY_STATUS_CODE).send({
                        token,
                        user: userData
                    });
                }
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
