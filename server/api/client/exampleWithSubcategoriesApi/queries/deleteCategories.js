import CategoryWithSubcategory from '../categoryModel';

export default function (ids) {
    return CategoryWithSubcategory.deleteMany({ _id: { $in: ids } });
}
