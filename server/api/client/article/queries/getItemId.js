import Item from '../itemModel';
import mongoose from 'mongoose';

export default function (id, locale) {
    return Item.findOne({ _id: { $in: [id, mongoose.Types.ObjectId(id)] } }, {
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
                subcategory: 1,
                audioFile: 1,
                audioTitle: 1
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
