import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (search, page, size, sort, categoryId, subcategoryId, excludeArticleIds, locale) {
    const db = mongoose.connection;
    const pattern = '.*' + search + '.*';

    return db.collection('articles').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
                ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                // eslint-disable-next-line max-len
                ...(subcategoryId ? { [`data.${DEFAULT_LOCALE}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {}),
                ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {}),
                $and: [
                    {
                        $or: [
                            { [`data.${DEFAULT_LOCALE}.status`]: { $exists: true, $eq: 'published' } },
                            { [`data.${DEFAULT_LOCALE}.status`]: { $exists: false } }
                        ]
                    },
                    {
                        $or: [
                            { 'data.en.title': { $regex: pattern, $options: 'i' } },
                            { 'data.zh-cn.title': { $regex: pattern, $options: 'i' } },
                            { 'data.zh-tw.title': { $regex: pattern, $options: 'i' } }
                        ]
                    }
                ]
            }
        },
        {
            $facet: {
                paginatedResults: [
                    { $skip: Number((page - 1) * size) },
                    { $limit: Number(size) },
                    {
                        $project: {
                            createdAt: 1,
                            updatedAt: 1,
                            data: {
                                [locale || DEFAULT_LOCALE]: {
                                    title: 1
                                }
                            }
                        }
                    }
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
