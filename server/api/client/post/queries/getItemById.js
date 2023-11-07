import Item from '../itemModel';

export default function (_id) {
    return Item.findById(_id);
}
