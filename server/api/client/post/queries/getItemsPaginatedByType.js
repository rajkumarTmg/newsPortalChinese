import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page, size, sort, locale, categoryId, subcategoryId, excludeArticleIds, type, featured) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const db = mongoose.connection;

    if (locale) {
        return db.collection('posts').aggregate([
            {
                $match: {
                    [`data.${locale}.hidden`]: { $ne: true },
                    $or: [
                        { [`data.${locale}.status`]: { $exists: true, $eq: 'published' } },
                        { [`data.${locale}.status`]: { $exists: false } }
                    ],
                    ...(type ? { type: { $eq: type } } : {}),
                    ...(featured ? { [`data.${locale}.featured`]: { $eq: true } } : {}),
                    ...(categoryId ? { [`data.${locale}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                    ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {})
                }
            },
            {
                $facet: {
                    paginatedResults: [
                        {
                            $sort: {
                                [`data.${locale}.date`]: sortDirection
                            }
                        },
                        { $skip: Number((page - 1) * size) },
                        { $limit: Number(size) },
                        {
                            $project: {
                                type: 1,
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
                                        videoPreview: 1,
                                        videoLink: 1,
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
                                views: 1
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

    return db.collection('posts').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
                $or: [
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: true, $eq: 'published' } },
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: false } }
                ],
                ...(type ? { type: { $eq: type } } : {}),
                ...(featured ? { [`data.${DEFAULT_LOCALE}.featured`]: { $eq: true } } : {}),
                ...(categoryId ? { [`data.${DEFAULT_LOCALE}.category`]: { $in: [mongoose.Types.ObjectId(categoryId), categoryId] } } : {}),
                ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {})
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
                            type: 1,
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
                            },
                            views: 1
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
