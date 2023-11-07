import Item from '../itemModel';

export default function (ids, categoryId, subcategoryId) {
    return Item.updateMany({ _id: { $in: ids } }, {
        // eslint-disable-next-line max-len
        $set: { 'data.en.category': categoryId, 'data.zh-cn.category': categoryId, 'data.zh-tw.category': categoryId, 'data.en.subcategory': subcategoryId || null, 'data.zh-cn.subcategory': subcategoryId || null, 'data.zh-tw.subcategory': subcategoryId || null }
    }, { new: true });
}
