import Item from '../categoryModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (alias) {
    return Item.findOne({ [`data.${DEFAULT_LOCALE}.alias`]: { $eq: alias } });
}
