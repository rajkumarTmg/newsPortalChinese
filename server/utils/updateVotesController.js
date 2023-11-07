import schedule from 'node-schedule';
// DB
import getNotCompletedVotes from '../api/client/votes/queries/getItems';
import { DEFAULT_LOCALE } from '../../src/apps/client/constants';
import editItem from '../api/client/votes/queries/editItem';
import getUser from '../api/client/user/queries/getUser';
import getItemsWithAnswerInfo from '../api/client/votes/utils/getItemsWithAnswerInfo';
import sendEmail from '../helpers/sendMessage/sendEmail';
import { getEmailTemplateVoteResult } from './getEmailTemplate';
import isPast from 'date-fns/isPast';

class UpdateVotesController {
    async updateVotesEmails () {
        getNotCompletedVotes(false).then(votes => {
            if (votes?.length) {
                votes.forEach((vote) => {
                    const date = vote.data[DEFAULT_LOCALE].date;

                    if (isPast(vote.data[DEFAULT_LOCALE].date)) {
                        return;
                    }

                    const job = schedule.scheduleJob(vote._id.toString(), date, () => {
                        editItem(vote._id, { completed: true, updatedAt: Date.now() })
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

                                                const TITLE = {
                                                    en: 'Vote completed',
                                                    'zh-cn': '投票完成',
                                                    'zh-tw': '投票完成'
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
                                                }
                                            });
                                    });
                                }
                            });
                    });

                    job.schedule();
                });
            }
        });
    }
}

const updateVotesController = new UpdateVotesController();

export default updateVotesController;
