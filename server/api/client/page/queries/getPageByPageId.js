import Page from '../model';

export default function getPageByPageId (pageId, locale) {
    if (locale) {
        return Page.findOne({ pageId }, {
            pageId: 1,
            createdAt: 1,
            updatedAt: 1,
            data: {
                [locale]: 1
            }
        });
    }

    return Page.findOne({ pageId });
}
