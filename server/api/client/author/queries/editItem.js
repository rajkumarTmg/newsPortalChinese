import Item from '../model';

export default function (_id, item) {
    return Item.findByIdAndUpdate(_id, item, { new: true });
}
