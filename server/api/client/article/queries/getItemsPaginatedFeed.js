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
                $addFields: {
                    convertedAuthorId: { $toObjectId: `$data.${locale}.author` },
                    convertedCategoryId: { $toObjectId: `$data.${locale}.category` }
                }
            },
            {
                $lookup: {
                    from: 'authors',
                    localField: 'convertedAuthorId',
                    foreignField: '_id',
                    as: 'author'
                }
            },
            {
                $unwind: '$author'
            },
            {
                $lookup: {
                    from: 'articlecategorywithsubcategories',
                    localField: 'convertedCategoryId',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $project: {
                    createdAt: 1,
                    updatedAt: 1,
                    data: {
                        [locale]: {
                            title: 1,
                            shortDescription: 1,
                            date: 1,
                            alias: 1,
                            avatar: 1
                        }
                    },
                    author: 1,
                    category: 1
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
                ]
            }
        },
        {
            $sort: {
                [`data.${DEFAULT_LOCALE}.date`]: sortDirection
            }
        },
        { $skip: Number((page - 1) * size) },
        { $limit: Number(size) },
        {
            $addFields: {
                convertedAuthorId: { $toObjectId: `$data.${DEFAULT_LOCALE}.author` },
                convertedCategoryId: { $toObjectId: `$data.${DEFAULT_LOCALE}.category` }
            }
        },
        {
            $lookup: {
                from: 'authors',
                localField: 'convertedAuthorId',
                foreignField: '_id',
                as: 'author'
            }
        },
        {
            $unwind: '$author'
        },
        {
            $lookup: {
                from: 'articlecategorywithsubcategories',
                localField: 'convertedCategoryId',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $unwind: '$category'
        },
        {
            $project: {
                createdAt: 1,
                updatedAt: 1,
                data: 1,
                author: 1,
                category: 1
            }
        }
    ]).toArray();
}
