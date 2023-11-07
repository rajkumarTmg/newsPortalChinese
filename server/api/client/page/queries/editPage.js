import Page from '../model';

export default function editPage (pageId, page) {
    return Page.findOneAndUpdate({ pageId: pageId }, page, { new: true });
}
