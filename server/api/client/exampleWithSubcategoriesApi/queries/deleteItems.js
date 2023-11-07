import Item from '../itemModel';

export default function (ids) {
    return Item.deleteMany({ _id: { $in: ids } });
}
