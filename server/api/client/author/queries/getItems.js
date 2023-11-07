import Item from '../model';

export default function (locale) {
    if (locale) {
        return Item.find({}, {
            createdAt: 1,
            updatedAt: 1,
            data: {
                [locale]: 1
            }
        }).sort({ createdAt: 1 });
    }

    return Item.find({}).sort({ createdAt: 1 });
}
