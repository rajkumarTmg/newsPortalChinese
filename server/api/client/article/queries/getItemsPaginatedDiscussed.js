import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page, size, locale, categoryId, subcategoryId, excludeArticleIds, period) {
    const dateNow = new Date().getTime();
    const periodRange = (period === 'day' && (3600 * 24 * 1000)) || (period === 'week' && (3600 * 24 * 7 * 1000)) || 0;
    const dateMax = dateNow - periodRange;
    const db = mongoose.connection;

    if (locale) {
        return db.collection('articles').aggregate([
            {
                $match: {
                    [`data.${locale}.hidden`]: { $ne: true },
                    $or: [
                        { [`data.${locale}.status`]: { $exists: true, $eq: 'published' } },
                        { [`data.${locale}.status`]: { $exists: false } }
                    ],
                    ...(categoryId ? { [`data.${locale}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                    ...(subcategoryId ? { [`data.${locale}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {}),
                    ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {})
                }
            },
            {
                $addFields: {
                    commentsFiltered: {
                        $filter: {
                            input: '$comments.list',
                            as: 'item',
                            cond: { $gte: ['$$item.createdAt', dateMax] }
                        }
                    }
                }
            },
            {
                $addFields: { size: { $size: { $ifNull: ['$commentsFiltered', []] } } }
            },
            {
                $sort: {
                    size: -1
                }
            },
            { $skip: Number((page - 1) * size) },
            { $limit: Number(size) },
            {
                $project: {
                    createdAt: 1,
                    updatedAt: 1,
                    data: {
                        [locale]: {
                            title: 1,
                            shortDescription: 1,
                            date: 1,
                            author: 1,
                            alias: 1,
                            avatar: 1,
                            category: 1,
                            subcategory: 1
                        }
                    },
                    likes: {
                        count: {
                            $size: { $ifNull: ['$likes.list', []] }
                        },
                        list: []
                    },
                    comments: {
                        count: {
                            $size: { $ifNull: ['$comments.list', []] }
                        },
                        list: []
                    },
                    commentsFiltered: 1,
                    size: 1
                }
            }
        ]).toArray();
    }

    return db.collection('articles').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
                $or: [
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: true, $eq: 'published' } },
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: false } }
                ],
                ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                // eslint-disable-next-line max-len
                ...(subcategoryId ? { [`data.${DEFAULT_LOCALE}.subcategory`]: { $in: [mongoose.Types.ObjectId(subcategoryId), subcategoryId] } } : {}),
                ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {})
            }
        },
        {
            $addFields: {
                commentsFiltered: {
                    $filter: {
                        input: '$comments.list',
                        as: 'item',
                        cond: { $gte: ['$$item.createdAt', dateMax] }
                    }
                }
            }
        },
        {
            $addFields: { size: { $size: { $ifNull: ['$commentsFiltered', []] } } }
        },
        {
            $sort: {
                size: -1
            }
        },
        { $skip: Number((page - 1) * size) },
        { $limit: Number(size) },
        {
            $project: {
                createdAt: 1,
                updatedAt: 1,
                data: 1,
                likes: {
                    count: {
                        $size: { $ifNull: ['$likes.list', []] }
                    },
                    list: []
                },
                comments: {
                    count: {
                        $size: { $ifNull: ['$comments.list', []] }
                    },
                    list: []
                }
            }
        }
    ]).toArray();
}
