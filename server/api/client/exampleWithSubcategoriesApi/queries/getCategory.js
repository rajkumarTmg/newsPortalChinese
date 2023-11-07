import CategoryWithSubcategory from '../categoryModel';

export default function (id) {
    return CategoryWithSubcategory.findById(id);
}
