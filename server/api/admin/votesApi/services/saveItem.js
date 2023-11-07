import schedule from 'node-schedule';
import {
    BAD_REQUEST_STATUS_CODE,
    MONGODB_DUPLICATE_CODE,
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import saveItem from '../../../client/votes/queries/saveItem';
import sendEmail from '../../../../helpers/sendMessage/sendEmail';
import { getEmailTemplateVoteResult } from '../../../../utils/getEmailTemplate';
import editItem from '../../../client/votes/queries/editItem';
import getUser from '../../../client/user/queries/getUser';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';
import getItemsWithAnswerInfo from '../../../client/votes/utils/getItemsWithAnswerInfo';
import isPast from 'date-fns/isPast';

export default function (req, res) {
    try {
        const item = req.body;
        const now = Date.now();

        const TITLE = {
            en: 'Vote completed',
            'zh-cn': '投票完成',
            'zh-tw': '投票完成'
        };

        saveItem({ data: item, createdAt: now, updatedAt: now })
            .then(item => {
                const date = item.data[DEFAULT_LOCALE].date;

                if (isPast(item.data[DEFAULT_LOCALE].date)) {
                    return res.status(OKAY_STATUS_CODE).send(item);
                }

                const job = schedule.scheduleJob(item._id.toString(), date, () => {
                    editItem(item._id, { completed: true, updatedAt: Date.now() })
                        .then((vote) => {
                            if (vote.answers) {
                                Object.keys(vote.answers).forEach((option) => {
                                    const id = vote.answers[option][0].userId?.toString();
                                    const locale = vote.answers[option][0].locale || 'en';
                                    getUser(id)
                                        .then((user) => {
                                            const email = user.email;
                                            const [itemsWithAnswerInfo] = getItemsWithAnswerInfo([vote], user._id.toString());
                                            const answersEntries = Object.entries(vote.answers);
                                            const totalVotes = answersEntries.reduce((acc, current) => (
                                                acc + current[1].length
                                            )
                                            , 0);
                                            const options = vote.data[locale].votingOptions.map((option) => ({
                                                title: option.data[locale].variant,
                                                percent: `${(itemsWithAnswerInfo.answers[option.variantId]?.percent || 0)}%`,
                                                selected: itemsWithAnswerInfo.selectedOption === option.variantId
                                            }));

                                            const df = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' });
                                            const dateStart = df.format(new Date(vote.createdAt));
                                            const dateEnd = df.format(new Date(vote.data[locale].date));

                                            const MAIL_CONTENT = {
                                                en: {
                                                    header: 'Voting results',
                                                    title: vote.data.en.title,
                                                    tickets: `Total Votes: ${totalVotes.toLocaleString()}`,
                                                    period: `Voting Period: ${dateStart} - ${dateEnd}`,
                                                    thanks: 'Thank you for your participation!'
                                                },
                                                'zh-cn': {
                                                    header: '投票结果',
                                                    title: vote.data['zh-cn'].title,
                                                    tickets: `全部票数: ${totalVotes.toLocaleString()}`,
                                                    period: `投票时间: ${dateStart} - ${dateEnd}`,
                                                    thanks: '感谢您的参与！'
                                                },
                                                'zh-tw': {
                                                    header: '投票結果',
                                                    title: vote.data['zh-tw'].title,
                                                    tickets: `全部票數: ${totalVotes.toLocaleString()}`,
                                                    period: `投票時間: ${dateStart} - ${dateEnd}`,
                                                    thanks: '感謝您的參與！'
                                                }
                                            };

                                            const MAIL_TITLE = {
                                                en: 'Subscribe to New San Cai Family Fun!',
                                                'zh-cn': '订阅新三才 全家乐融融！',
                                                'zh-tw': '訂閱新三才 全家樂融融！'
                                            };

                                            try {
                                                sendEmail(email, {
                                                    subject: TITLE[locale],
                                                    content: getEmailTemplateVoteResult({
                                                        domain: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
                                                        texts: MAIL_CONTENT[locale],
                                                        title: MAIL_TITLE[locale],
                                                        lang: locale,
                                                        options: options
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
                                        });
                                });
                            }
                        });
                });

                job.schedule();

                res.status(OKAY_STATUS_CODE).send(item);
            })
            .catch((err) => {
                if (err.code === MONGODB_DUPLICATE_CODE) {
                    return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
                }

                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
