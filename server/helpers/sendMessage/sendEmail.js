import nodemailer from 'nodemailer';

export default function sendEmail (
    email,
    payload
) {
    payload = {
        subject: '',
        content: '',
        files: [],
        ...payload
    };

    const login = process.env.MAIL_CREDENTIALS_LOGIN;
    const password = process.env.MAIL_CREDENTIALS_PASSWORD;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        auth: {
            user: login,
            pass: password
        }
    });
    const mailOptions = {
        from: login,
        to: email,
        subject: payload.subject,
        html: payload.content,
        attachments: payload.files
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, error => {
            if (error) {
                console.log('nodemailer error:', error); // eslint-disable-line no-console
                return reject(error);
            }

            return resolve();
        });
    });
}
