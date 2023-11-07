import request from 'superagent';
import base from '../base';

export default function (context) {
    const locale = context?.locale;
    const alias = (context?.params || context?.query)?.slug;

    return base(
        request
            .get('/api/client/post/getbyalias')
            .query({ locale: locale, alias: alias })

    )
        .then(post => {
            return {
                props: { postItem: post }
            };
        });
}
