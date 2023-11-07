import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (item, id) {
    const db = mongoose.connection;
    return db.collection('articles').countDocuments({
        [`data.${DEFAULT_LOCALE}.alias`]: item.data[DEFAULT_LOCALE].alias,
        ...(id
            ? { _id: { $ne: mongoose.Types.ObjectId(id) } }
            : {})
    }, { limit: 1 });
}
