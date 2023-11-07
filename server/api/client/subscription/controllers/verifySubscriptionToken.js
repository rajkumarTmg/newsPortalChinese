import {
    OKAY_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    FORBIDDEN_STATUS_CODE
} from '../../../../constants';
import { verifyToken } from '../../../../helpers/token';

import editSubscription from '../queries/editSubscription';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import getEmailTemplate from '../../../../utils/getEmailTemplate';

const MAIL_CONTENT = {
    // eslint-disable-next-line max-len
    en: '<span style="white-space: pre-line; font-family: Arial, sans-serif; color: #080808; font-size: 22px; line-height: 25px; letter-spacing: 0.42px; text-align: center;">Thank you for subscribing to the New Sancai Electronic Journal,\n' + '\n' + 'Our awesome content is on the way!</span>',
    // eslint-disable-next-line max-len
    'zh-cn': '<span style="white-space: pre-line; font-family: Arial, sans-serif; color: #080808; font-size: 22px; line-height: 25px; letter-spacing: 0.42px; text-align: center;">感谢您订阅新三才电子期刊，\n' + '\n' + '我们的精彩内容正在发送中！</span>',
    // eslint-disable-next-line max-len
    'zh-tw': '<span style="white-space: pre-line; font-family: Arial, sans-serif; color: #080808; font-size: 22px; line-height: 25px; letter-spacing: 0.42px; text-align: center;">感謝您訂閱新三才電子期刊，\n' + '\n' + '我們的精彩內容正在發送中！</span>'
};

const MAIL_TITLE = {
    en: 'Subscribe to New San Cai Family Fun!',
    'zh-cn': '订阅新三才 全家乐融融！',
    'zh-tw': '訂閱新三才 全家樂融融！'
};

const TITLE = {
    en: 'Successful subscription',
    'zh-cn': '新三才注册成功',
    'zh-tw': '新三才註冊成功'
};

export default (req, res) => {
    try {
        const { token, locale } = req.body;

        verifyToken(token)
            .then(({ _id, tokenType }) => {
                if (tokenType !== TOKENS_TYPES.subscriptionVerifyEmail) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }
                editSubscription(_id, { verified: true })
                    .then((subscription) => {
                        try {
                            sendEmail(subscription.user.email, {
                                subject: TITLE[locale],
                                content: getEmailTemplate({
                                    domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                                    content: MAIL_CONTENT[locale],
                                    title: MAIL_TITLE[locale],
                                    lang: locale
                                }),
                                files: [
                                    {
                                        filename: 'logoMobile.png',
                                        path: './public/images/logoMobile.png',
                                        cid: 'logo'
                                    }
                                ]
                            });
                        } catch (e) {
                            // console.log(e);
                            return res.status(BAD_REQUEST_STATUS_CODE).end();
                        }

                        return res.status(OKAY_STATUS_CODE).end();
                    });
            })
            .catch(() => {
                res.status(BAD_REQUEST_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
