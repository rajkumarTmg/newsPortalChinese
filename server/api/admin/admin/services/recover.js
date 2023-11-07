import getRecoveryEmailTemplate from '../templates/recoveryEmail';

import { OKAY_STATUS_CODE, FORBIDDEN_STATUS_CODE, SERVER_ERROR_STATUS_CODE, TOKENS_TYPES, TOKEN_EXPIRES_IN } from '../../../../constants';
import getAdminByEmail from '../queries/getAdminByEmail';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';

import { generateToken } from '../../../../helpers/token';

import { RECOVERY_URL } from '../../../../../src/apps/admin/constants/constants';

export default function (req, res) {
    try {
        const email = req.query.email;

        res.sendStatus(OKAY_STATUS_CODE).end();

        getAdminByEmail(email)
            .then(async admin => {
                if (!admin) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                const token = await generateToken({ _id: admin._id, tokenType: TOKENS_TYPES.adminRestorePassword }, TOKEN_EXPIRES_IN.adminRestorePassword);

                const subject = 'Password restore';
                const recoveryUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}${RECOVERY_URL}?recovery-token=${token}&&email=${admin.email}`;

                sendEmail(
                    admin.email,
                    {
                        subject,
                        content: getRecoveryEmailTemplate(recoveryUrl)
                    }
                );
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
