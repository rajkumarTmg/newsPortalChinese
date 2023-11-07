import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page, size, sort, locale, excludeArticleIds, tags) {
    const re = tags.split(',').map(tag => tag.trim()).join('|');
    const sortDirection = sort === 'asc' ? 1 : -1;
    const db = mongoose.connection;

    if (!re) {
        return Promise.resolve([{ paginatedResults: [], totalCount: [{ count: 0 }] }]);
    }

    if (locale) {
        return db.collection('articles').aggregate([
            {
                $match: {
                    [`data.${locale}.hidden`]: { $ne: true },
                    $or: [
                        { [`data.${locale}.status`]: { $exists: true, $eq: 'published' } },
                        { [`data.${locale}.status`]: { $exists: false } }
                    ],
                    ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {}),
                    [`data.${locale}.tags`]: { $exists: true, $ne: '' }
                }
            },
            {
                $addFields: { results: { $regexFindAll: { input: '$data.' + locale + '.tags', regex: re, options: 'i' } } }
            },
            {
                $match: {
                    results: { $exists: true, $not: { $size: 0 } }
                }
            },
            {
                $facet: {
                    paginatedResults: [
                        {
                            $addFields: { size: { $size: '$results' } }
                        },
                        {
                            $sort: {
                                size: sortDirection
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

    return db.collection('articles').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true },
                $or: [
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: true, $eq: 'published' } },
                    { [`data.${DEFAULT_LOCALE}.status`]: { $exists: false } }
                ],
                ...(excludeArticleIds ? { _id: { $nin: [...excludeArticleIds.split(',').map(id => mongoose.Types.ObjectId(id))] } } : {}),
                [`data.${locale}.tags`]: { $exists: true, $ne: '' }
            }
        },
        {
            $addFields: { results: { $regexFindAll: { input: `$data.${DEFAULT_LOCALE}.tags`, regex: re, options: 'i' } } }
        },
        {
            $match: {
                results: { $exists: true, $not: { $size: 0 } }
            }
        },
        {
            $facet: {
                paginatedResults: [
                    {
                        $addFields: { size: { $size: '$results' } }
                    },
                    {
                        $sort: {
                            size: sortDirection
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
