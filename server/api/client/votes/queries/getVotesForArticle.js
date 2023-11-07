import VoteItem from '../voteModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';
import mongoose from 'mongoose';

export default function (page, articleId, category, subcategory) {
    return VoteItem.find({
        [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
        completed: { $ne: true },
        [`data.${DEFAULT_LOCALE}.date`]: { $gte: Date.now() },
        $or: [
            {
                [`data.${DEFAULT_LOCALE}.showAll`]: { $eq: true }
            },
            {
                // eslint-disable-next-line max-len
                [`data.${DEFAULT_LOCALE}.priorities`]: { $elemMatch: { [`${DEFAULT_LOCALE}.page`]: page, [`${DEFAULT_LOCALE}.articleId`]: { $exists: true, $ne: '', $in: [mongoose.Types.ObjectId(articleId), articleId] } } }
            },
            {
                [`data.${DEFAULT_LOCALE}.priorities`]: {
                    $elemMatch: {
                        [`${DEFAULT_LOCALE}.page`]: page,
                        [`${DEFAULT_LOCALE}.category`]: { $exists: true, $ne: '', $in: [mongoose.Types.ObjectId(category), category] },
                        ...(subcategory
                            ? { [`${DEFAULT_LOCALE}.subcategory`]: { $exists: true, $ne: '', $in: [mongoose.Types.ObjectId(subcategory), subcategory] } }
                            : { $or: [{ [`${DEFAULT_LOCALE}.subcategory`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.subcategory`]: { $eq: '' } }] })
                    }
                }
            },
            {
                [`data.${DEFAULT_LOCALE}.priorities`]: {
                    $elemMatch: {
                        [`${DEFAULT_LOCALE}.page`]: page,
                        $and: [
                            { [`${DEFAULT_LOCALE}.category`]: { $exists: true, $ne: '', $in: [mongoose.Types.ObjectId(category), category] } },
                            { $or: [{ [`${DEFAULT_LOCALE}.subcategory`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.subcategory`]: { $eq: '' } }] }
                        ]
                    }
                }
            },
            {
                // eslint-disable-next-line max-len
                [`data.${DEFAULT_LOCALE}.priorities`]: {
                    $elemMatch: {
                        [`${DEFAULT_LOCALE}.page`]: page,
                        $and: [
                            { $or: [{ [`${DEFAULT_LOCALE}.category`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.category`]: { $eq: '' } }] },
                            { $or: [{ [`${DEFAULT_LOCALE}.subcategory`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.subcategory`]: { $eq: '' } }] },
                            { $or: [{ [`${DEFAULT_LOCALE}.articleId`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.articleId`]: { $eq: '' } }] }
                        ]
                    }
                }
            }
        ]
    });
}
