import request from 'superagent';
import base from '../base';

export default function (id) {
    return base(
        request
            .put('/api/client/article/share')
            .query({ articleId: id })
    );
}
