import {
    OKAY_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    TOKEN_EXPIRES_IN
} from '../../../../constants';

import saveSubscriptionQuery from '../queries/saveSubscription';
import getSubscriptionByEmail from '../queries/getSubscriptionByEmail';

import validate from '../../../../helpers/validation/validate';
import normalizeEmail from '../../../../utils/normalizeEmail';
import { subscriptionValidation } from '../utils/validation';
import { generateToken } from '../../../../helpers/token';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import getEmailTemplate from '../../../../utils/getEmailTemplate';

const MAIL_CONTENT = {
    en: 'Please click on the link below to activate your subscription',
    'zh-cn': '请单击下面的链接以激活您的订阅',
    'zh-tw': '請單擊下面的鏈接以激活您的訂閱'
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
            firstName,
            lastName,
            phone,
            locale
        } = req.body;

        const normalizedEmail = normalizeEmail(email);

        const existingSubscription = await getSubscriptionByEmail(normalizedEmail);

        if (existingSubscription) {
            if (existingSubscription.verified) {
                return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'This email is already in use' });
            } else {
                // eslint-disable-next-line max-len
                const token = await generateToken({ _id: existingSubscription._id, tokenType: TOKENS_TYPES.subscriptionVerifyEmail }, TOKEN_EXPIRES_IN.subscriptionVerifyEmail);
                const restoreLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}?subscription-token=${token}`;

                try {
                    sendEmail(existingSubscription.user.email, {
                        subject: TITLE[locale],
                        content: getEmailTemplate(
                            {
                                domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                                content: MAIL_CONTENT[locale],
                                link: restoreLink,
                                title: MAIL_TITLE[locale],
                                lang: locale
                            }
                        ),
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
            }
        }

        const now = Date.now();
        const subscription = {
            user: {
                email: normalizedEmail,
                notNormalizedEmail: email,
                ...(firstName ? { firstName } : {}),
                ...(lastName ? { lastName } : {}),
                ...(phone ? { phone } : {})
            },
            createdAt: now,
            verified: false
        };
        const isValid = validate(subscription.user, subscriptionValidation);

        if (!isValid) {
            return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'Subscription data is not valid' });
        }

        saveSubscriptionQuery(subscription)
            .then(async subscription => {
                // eslint-disable-next-line max-len
                const token = await generateToken({ _id: subscription._id, tokenType: TOKENS_TYPES.subscriptionVerifyEmail }, TOKEN_EXPIRES_IN.subscriptionVerifyEmail);
                const restoreLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}?subscription-token=${token}`;

                try {
                    sendEmail(subscription.user.email, {
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

                res.status(OKAY_STATUS_CODE).end();
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
