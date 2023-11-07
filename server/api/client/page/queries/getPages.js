import Page from '../model';

export default function getPages (locale) {
    if (locale) {
        return Page.find({}, {
            pageId: 1,
            createdAt: 1,
            updatedAt: 1,
            data: {
                [locale]: 1
            }
        });
    }

    return Page.find({});
}
