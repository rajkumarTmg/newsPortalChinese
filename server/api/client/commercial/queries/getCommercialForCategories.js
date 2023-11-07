import CommercialItem from '../commercialModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';
import mongoose from 'mongoose';

export default function (page, category, subcategory) {
    return CommercialItem.find({
        [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
        $or: [
            {
                [`data.${DEFAULT_LOCALE}.showAll`]: { $eq: true }
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
                // eslint-disable-next-line max-len
                [`data.${DEFAULT_LOCALE}.priorities`]: {
                    $elemMatch: {
                        [`${DEFAULT_LOCALE}.page`]: page,
                        ...(!subcategory
                            ? { $or: [{ [`${DEFAULT_LOCALE}.category`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.category`]: { $eq: '' } }] }
                            : {
                                [`${DEFAULT_LOCALE}.category`]: { $exists: true, $ne: '', $in: [mongoose.Types.ObjectId(category), category] },
                                $or: [{ [`${DEFAULT_LOCALE}.subcategory`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.subcategory`]: { $eq: '' } }]
                            }
                        )
                    }
                }
            },
            {
                // eslint-disable-next-line max-len
                [`data.${DEFAULT_LOCALE}.priorities`]: {
                    $elemMatch: {
                        [`${DEFAULT_LOCALE}.page`]: page,
                        ...(subcategory
                            ? {
                                $and: [
                                    { $or: [{ [`${DEFAULT_LOCALE}.category`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.category`]: { $eq: '' } }] },
                                    { $or: [{ [`${DEFAULT_LOCALE}.subcategory`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.subcategory`]: { $eq: '' } }] }
                                ]
                            }
                            : { $or: [{ [`${DEFAULT_LOCALE}.category`]: { $exists: false } }, { [`${DEFAULT_LOCALE}.category`]: { $eq: '' } }] }
                        )
                    }
                }
            }
        ]
    });
}
