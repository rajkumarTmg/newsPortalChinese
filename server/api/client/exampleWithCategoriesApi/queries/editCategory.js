import Category from '../categoryModel';

export default function (_id, item) {
    return Category.findByIdAndUpdate(_id, item, { new: true });
}
