import Item from '../itemModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (alias) {
    return Item.findOne(
        {
            [`data.${DEFAULT_LOCALE}.alias`]: { $eq: alias }
        },
        {
            _id: 1,
            data: {
                [DEFAULT_LOCALE]: {
                    category: 1,
                    subcategory: 1
                }
            }
        }
    );
}
