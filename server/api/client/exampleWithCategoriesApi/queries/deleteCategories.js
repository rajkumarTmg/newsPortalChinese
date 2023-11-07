import Category from '../categoryModel';

export default function (ids) {
    return Category.deleteMany({ _id: { $in: ids } });
}
