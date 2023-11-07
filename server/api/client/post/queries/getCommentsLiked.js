import Item from '../itemModel';

export default function (userId) {
    return Item.find({ 'comments.list.likes.list': { $in: userId } }, {
        'comments.list': {
            $filter: {
                input: '$comments.list',
                as: 'item',
                cond: { $in: [userId, '$$item.likes.list'] }
            }
        }
    }).distinct('comments.list._id');
}
