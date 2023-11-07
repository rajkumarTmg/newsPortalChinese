import CategoryWithSubcategory from '../categoryModel';

export default function (_id, item) {
    return CategoryWithSubcategory.findByIdAndUpdate(_id, item, { new: true });
}
