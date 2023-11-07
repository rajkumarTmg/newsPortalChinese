import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (search, page, size, sort, dateStart, dateEnd) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const pattern = '.*' + search + '.*';
    const db = mongoose.connection;
    return db.collection('posts').aggregate([
        {
            $match: {
                $or: [
                    { 'data.en.title': { $regex: pattern, $options: 'i' } },
                    { 'data.zh-cn.title': { $regex: pattern, $options: 'i' } },
                    { 'data.zh-tw.title': { $regex: pattern, $options: 'i' } }
                ]
            }
        },
        {
            $addFields: {
                comment: '$comments.list'
            }
        },
        {
            $addFields: {
                object: {
                    alias: `$data.${DEFAULT_LOCALE}.alias`,
                    _id: '$_id',
                    data: {
                        en: { title: '$data.en.title' },
                        'zh-cn': { title: '$data.zh-cn.title' },
                        'zh-tw': { title: '$data.zh-tw.title' }
                    }
                }
            }
        },
        {
            $unwind: '$comment'
        },
        {
            $match: {
                'comment.verified': { $ne: true },
                ...((dateStart && !dateEnd) ? { 'comment.createdAt': { $gte: parseInt(dateStart) } } : {}),
                ...((!dateStart && dateEnd) ? { 'comment.createdAt': { $lte: parseInt(dateEnd) } } : {}),
                ...((dateStart && dateEnd)
                    ? {
                        $and: [
                            { 'comment.createdAt': { $gte: parseInt(dateStart) } },
                            { 'comment.createdAt': { $lte: parseInt(dateEnd) } }
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
                            'comment.createdAt': sortDirection
                        }
                    },
                    { $skip: Number((page - 1) * size) },
                    { $limit: Number(size) },
                    {
                        $project: {
                            comment: 1,
                            object: 1,
                            _id: '$comment._id'
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
