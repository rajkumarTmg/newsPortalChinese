import Item from '../itemModel';

export default function (alias, locale) {
    return Item.findOne({
        [`data.${locale}.alias`]: { $eq: alias },
        [`data.${locale}.hidden`]: { $ne: true }
    },
    {
        type: 1,
        createdAt: 1,
        updatedAt: 1,
        data: {
            [locale]: 1
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
            list: {
                userName: 1,
                text: 1,
                createdAt: 1,
                likes: 1,
                _id: 1
            }
        },
        views: 1,
        shares: 1
    });
}
