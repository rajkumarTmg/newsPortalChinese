import { BAD_REQUEST_STATUS_CODE, OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import castVote from '../queries/сastVote';
import getUserInfo from '../../user/utils/getUserInfo';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import { getEmailTemplateVote } from '../../../../utils/getEmailTemplate';
import getItemsWithAnswerInfo from '../utils/getItemsWithAnswerInfo';

export default function (req, res) {
    try {
        const user = getUserInfo(res.locals.user);
        const { variantId, voteId, locale, path } = req.body;
        castVote(voteId, variantId, user._id.toString(), locale).then((voteItem) => {
            const restoreLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}${path}`;
            const [itemsWithAnswerInfo] = getItemsWithAnswerInfo([voteItem], user._id.toString());

            const options = voteItem.data[locale].votingOptions.map((option) => ({
                title: option.data[locale].variant,
                percent: `${(itemsWithAnswerInfo.answers[option.variantId]?.percent || 0)}%`,
                selected: itemsWithAnswerInfo.selectedOption === option.variantId
            }));
            const leftTime = voteItem.data[locale].date - Date.now();
            const days = Math.floor(leftTime / (3600 * 24 * 1000));
            const hours = Math.floor((leftTime - (days * 3600 * 24 * 1000)) / (3600 * 1000));

            const MAIL_CONTENT = {
                en: {
                    header: 'Poll:',
                    title: voteItem.data.en.title,
                    result: 'The results of your voting participation:'
                },
                'zh-cn': {
                    header: '民调：',
                    title: voteItem.data['zh-cn'].title,
                    result: '您的投票参与结果如下：'
                },
                'zh-tw': {
                    header: '民調：',
                    title: voteItem.data['zh-tw'].title,
                    result: '您的投票參與結果如下：'
                }
            };

            const MAIL_TITLE = {
                en: 'Subscribe to New San Cai Family Fun!',
                'zh-cn': '订阅新三才 全家乐融融！',
                'zh-tw': '訂閱新三才 全家樂融融！'
            };

            const MAIL_TIME_LEFT = {
                en: `Only ${days} days and ${hours} hours left`,
                'zh-cn': `投票将在${days}天${hours}小时后结束`,
                'zh-tw': `投票將在${days}天${hours}小時後結束`
            };

            const TITLE = {
                en: 'Your vote results',
                'zh-cn': '您的投票结果',
                'zh-tw': '您的投票結果'
            };

            try {
                sendEmail(user.email, {
                    subject: TITLE[locale],
                    content: getEmailTemplateVote({
                        domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                        texts: MAIL_CONTENT[locale],
                        link: restoreLink,
                        title: MAIL_TITLE[locale],
                        lang: locale,
                        options: options,
                        leftTime: MAIL_TIME_LEFT[locale]
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

            res.status(OKAY_STATUS_CODE).send(voteItem);
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
