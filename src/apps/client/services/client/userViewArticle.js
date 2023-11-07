import request from 'superagent';
import base from '../base';

export default function (id) {
    return base(
        request
            .put('/api/client/article/view')
            .query({ articleId: id })
    );
}
