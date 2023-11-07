import VoteItem from '../voteModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page) {
    return VoteItem.find({
        completed: { $ne: true },
        [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
        [`data.${DEFAULT_LOCALE}.date`]: { $gte: Date.now() },
        $or: [
            {
                [`data.${DEFAULT_LOCALE}.showAll`]: { $eq: true }
            },
            {
                [`data.${DEFAULT_LOCALE}.priorities`]: { $elemMatch: { [`${DEFAULT_LOCALE}.page`]: page } }
            }
        ]
    });
}
