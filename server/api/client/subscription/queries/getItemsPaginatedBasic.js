import mongoose from 'mongoose';

export default function (page, size, sort, dateStart, dateEnd) {
    const sortDirection = sort === 'asc' ? 1 : -1;
    const db = mongoose.connection;

    return db.collection('subscriptions').aggregate([
        {
            $match: {
                verified: { $eq: true },
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
