import CategoryWithSubcategory from '../categoryModel';

export default function (locale) {
    if (locale) {
        return CategoryWithSubcategory.find({}, {
            createdAt: 1,
            updatedAt: 1,
            data: {
                [locale]: {
                    alias: 1,
                    name: 1,
                    seoTitle: 1,
                    seoDescription: 1,
                    seoKeywords: 1,
                    featured: 1,
                    audioFile: 1,
                    audioTitle: 1
                }
            },
            positionIndex: 1,
            subcategories: 1
        }).sort({ positionIndex: 1 });
    }

    return CategoryWithSubcategory.find({}).sort({ positionIndex: 1 });
}
