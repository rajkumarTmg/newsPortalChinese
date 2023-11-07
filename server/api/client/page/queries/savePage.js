import Page from '../model';

export default function savePage (page) {
    return Page.create(page);
}
