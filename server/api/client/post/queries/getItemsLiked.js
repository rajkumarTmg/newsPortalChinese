import Item from '../itemModel';

export default function (userId) {
    return Item.find({ 'likes.list': { $in: userId } }).distinct('_id');
}
