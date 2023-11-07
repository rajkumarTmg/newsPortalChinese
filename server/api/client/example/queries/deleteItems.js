import Item from '../model';

export default function (ids) {
    return Item.deleteMany({ _id: { $in: ids } });
}
