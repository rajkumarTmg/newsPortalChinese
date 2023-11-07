import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page, size, sort, categoryId, subcategoryId, search, dateStart, dateEnd, noHidden) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const pattern = '.*' + search + '.*';
    const db = mongoose.connection;

    return db.collection('posts').aggregate([
        {
            $match: {
                ...(!noHidden && { [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true } }),
                ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                // eslint-disable-next-line max-len
                ...(subcategoryId ? { [`data.${DEFAULT_LOCALE}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {}),
                ...(search
                    ? {
                        $or: [
                            { 'data.en.title': { $regex: pattern, $options: 'i' } },
                            { 'data.zh-cn.title': { $regex: pattern, $options: 'i' } },
                            { 'data.zh-tw.title': { $regex: pattern, $options: 'i' } }
                        ]
                    }
                    : {}),
                ...((dateStart && !dateEnd) ? { createdAt: { $gte: parseInt(dateStart) } } : {}),
                ...((!dateStart && dateEnd) ? { createdAt: { $lte: parseInt(dateEnd) } } : {}),
                ...((dateStart && dateEnd)
                    ? {
                        $and: [
                            { createdAt: { $gte: parseInt(dateStart) } },
                            { createdAt: { $lte: parseInt(dateEnd) } }
                        ]
                    }
                    : {})
            }
        },
        {
            $facet: {
                paginatedResults: [
                    {
                        $sort: {
                            createdAt: sortDirection
                        }
                    },
                    { $skip: Number((page - 1) * size) },
                    { $limit: Number(size) }
                ],
                totalCount: [
                    {
                        $count: 'count'
                    }
                ]
            }
        }
    ]).toArray();
}
