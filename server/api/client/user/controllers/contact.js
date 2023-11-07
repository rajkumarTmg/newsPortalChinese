import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import { getEmailTemplateSimple } from '../../../../utils/getEmailTemplate';

export default async (req, res) => {
    const INFO_EMAIL = process.env.NEXT_PUBLIC_INFO_EMAIL;
    try {
        const {
            email = '',
            phone,
            firstName,
            lastName,
            comment
        } = req.body;

        sendEmail(INFO_EMAIL, {
            subject: 'Contact form',
            content: getEmailTemplateSimple({
                domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                // eslint-disable-next-line max-len
                content: `<span style="white-space: pre-line;"><span style="display: block; text-align: left;">Email: ${email},</span><span style="display: block; text-align: left;">Phone: ${phone},</span><span style="display: block; text-align: left;">First Name: ${firstName},</span><span style="display: block; text-align: left;">Last Name: ${lastName},</span><span style="display: block; text-align: left;">Comment: ${comment}</span></span>`,
                title: 'New Contact Application!'
            }),
            files: [
                {
                    filename: 'logoMobile.png',
                    path: './public/images/logoMobile.png',
                    cid: 'logo'
                }
            ]
        });

        res.status(OKAY_STATUS_CODE).end();
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
