import Item from '../itemModel';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';
import mongoose from 'mongoose';

export default function (searchText, categoryId, subcategoryId) {
    return Item.find({
        [`data.${DEFAULT_LOCALE}.title`]: { $regex: `${searchText}`, $options: 'i' },
        ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
        ...(subcategoryId ? { [`data.${DEFAULT_LOCALE}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {})
    });
};
