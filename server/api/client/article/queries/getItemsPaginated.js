import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (page, size, sort, locale) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const db = mongoose.connection;

    if (locale) {
        return db.collection('articles').aggregate([
            {
                $match: {
                    [`data.${locale}.hidden`]: { $ne: true },
                    $or: [
                        { [`data.${locale}.status`]: { $exists: true, $eq: 'published' } },
                        { [`data.${locale}.status`]: { $exists: false } }
                    ]
                }
            },
            {
                $sort: {
                    [`data.${locale}.date`]: sortDirection
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
                    views: 1,
                    shares: 1
                }
            }
        ]).toArray();
    }

    return db.collection('articles').aggregate([
        {
            $match: {
                [`data.${DEFAULT_LOCALE}.hidden`]: { $ne: true }
            },
            $or: [
                { [`data.${DEFAULT_LOCALE}.status`]: { $exists: true, $eq: 'published' } },
                { [`data.${DEFAULT_LOCALE}.status`]: { $exists: false } }
            ]
        },
        {
            $sort: {
                [`data.${DEFAULT_LOCALE}.date`]: sortDirection
            }
        },
        { $skip: Number((page - 1) * size) }, { $limit: Number(size) },
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
                },
                views: 1,
                shares: 1
            }
        }
    ]).toArray();
}
