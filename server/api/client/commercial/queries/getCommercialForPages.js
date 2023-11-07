import CommercialItem from '../commercialModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page) {
    return CommercialItem.find({
        [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
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
