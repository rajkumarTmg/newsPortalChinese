import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import { getEmailTemplateSimple } from '../../../../utils/getEmailTemplate';
import multipart from '../../../../helpers/files/multipart';
import fs from 'fs';

const uploader = multipart();

export default async (req, res) => {
    const INFO_EMAIL = process.env.NEXT_PUBLIC_INFO_EMAIL;
    try {
        uploader(req, res, async err => {
            if (err) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const values = JSON.parse(req.body.values) || {};
            const files = req.files?.filter(item => item.fieldname === 'attached');
            const filesPath = files.length ? files.map(file => ({ path: file.path, filename: file.originalname })) : [];

            sendEmail(INFO_EMAIL, {
                subject: 'Submit form',
                // eslint-disable-next-line max-len
                content: getEmailTemplateSimple({
                    domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                    // eslint-disable-next-line max-len
                    content: `<span style="white-space: pre-line;"><span style="display: block; text-align: left;">Email: ${values.email},</span><span style="display: block; text-align: left;">Phone: ${values.phone},</span><span style="display: block; text-align: left;">First Name: ${values.firstName},</span><span style="display: block; text-align: left;">Last Name: ${values.lastName},</span><span style="display: block; text-align: left;">Comment: ${values.comment}</span></span>`,
                    title: 'New Submit Article Application!'
                }),
                files: [
                    {
                        filename: 'logoMobile.png',
                        path: './public/images/logoMobile.png',
                        cid: 'logo'
                    },
                    ...filesPath
                ]
            }).then(() => {
                if (filesPath) {
                    filesPath.forEach(file => {
                        fs.unlinkSync(file.path);
                    });
                }
            });

            res.status(OKAY_STATUS_CODE).end();
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
