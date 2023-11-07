import Item from '../itemModel';
import mongoose from 'mongoose';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (ids, locale, sortDirection) {
    if (locale) {
        return Item.find({ _id: { $in: [...ids.split(',').map(id => mongoose.Types.ObjectId(id))] } }, {
            createdAt: 1,
            updatedAt: 1,
            data: {
                [locale]: {
                    title: 1,
                    description: 1,
                    date: 1,
                    author: 1,
                    alias: 1,
                    avatar: 1,
                    videoLink: 1,
                    videoPreview: 1,
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
                list: {
                    userName: 1,
                    text: 1,
                    createdAt: 1,
                    likes: 1,
                    _id: 1
                }
            }
        },
        {
            ...(sortDirection
                ? {
                    sort: {
                        [`data.${locale}.date`]: sortDirection
                    }
                }
                : {})
        });
    }

    return Item.find({ _id: { $in: [...ids.split(',').map(id => mongoose.Types.ObjectId(id))] } }, {
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
            list: {
                userName: 1,
                text: 1,
                createdAt: 1,
                likes: 1,
                _id: 1
            }
        }
    },
    {
        ...(sortDirection
            ? {
                sort: {
                    [`data.${DEFAULT_LOCALE}.date`]: sortDirection
                }
            }
            : {})
    });
}
