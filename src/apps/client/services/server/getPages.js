import request from 'superagent';
import base from '../base';
import setPages from '../../store/actions/setPages';

export default function ({ locale }) {
    return base(
        request
            .get('/api/client/page/')
            .query({ locale: locale })

    )
        .then(pages => {
            return {
                actions: [setPages(pages)]
            };
        })
        .catch(() => {
            return {
                actions: [setPages([])]
            };
        });
}
