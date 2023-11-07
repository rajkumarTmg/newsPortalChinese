import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    TOKEN_EXPIRES_IN, BAD_REQUEST_STATUS_CODE
} from '../../../../constants';
import { generateToken } from '../../../../helpers/token';

import normalizeEmail from '../../../../utils/normalizeEmail';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';

import getEmailTemplate from '../../../../utils/getEmailTemplate';

import getUserByEmail from '../queries/getUserByEmail';

const MAIL_CONTENT = {
    // eslint-disable-next-line max-len
    en: '<span style="white-space: pre-line;">Your password can be reset,\n' + '\n' + 'here is your link</span>',
    // eslint-disable-next-line max-len
    'zh-cn': '<span style="white-space: pre-line;">您的密码可以重设，\n' + '\n' + '这是你的链接</span>',
    // eslint-disable-next-line max-len
    'zh-tw': '<span style="white-space: pre-line;">您的密碼可以重設，\n' + '\n' + '這是你的鏈接</span>'
};

const MAIL_TITLE = {
    en: 'Welcome to Sancairen!',
    'zh-cn': '欢迎加入三才人！',
    'zh-tw': '歡迎加入三才人！'
};

const TITLE = {
    en: 'Restore password',
    'zh-cn': '恢复密码',
    'zh-tw': '恢復密碼'
};

export default (req, res) => {
    try {
        const { email, locale } = req.query;

        getUserByEmail(normalizeEmail(email))
            .then(async user => {
                if (user) {
                    const token = await generateToken({ _id: user._id, tokenType: TOKENS_TYPES.userRestorePassword }, TOKEN_EXPIRES_IN.userRestorePassword);
                    const restoreLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}?restore-token=${token}`;

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

                        return res.status(OKAY_STATUS_CODE).end();
                    } catch (e) {
                        // console.log(e);
                        return res.status(BAD_REQUEST_STATUS_CODE).end();
                    }
                } else {
                    return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'User is not found' });
                }
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
