import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (search, page, size, sort, categoryId, subcategoryId, excludeArticleIds, type, locale) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const db = mongoose.connection;
    const re = new RegExp(search, 'i');

    return db.collection('posts').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
                ...(type ? { type: { $eq: type } } : {}),
                ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                // eslint-disable-next-line max-len
                ...(subcategoryId ? { [`data.${DEFAULT_LOCALE}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {}),
                ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {}),
                [`data.${DEFAULT_LOCALE}.title`]: { $regex: re }
            }
        },
        {
            $facet: {
                paginatedResults: [
                    {
                        $sort: {
                            [`data.${DEFAULT_LOCALE}.date`]: sortDirection
                        }
                    },
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
