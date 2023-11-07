import request from 'superagent';
import base from '../base';

const TOKEN = process.env.NEXT_PUBLIC_GET_LOCATION_TOKEN;

export default function () {
    return base(
        request
            .get('https://ipinfo.io/json')
            .query({ token: TOKEN })

    )
        .then(location => location);
}
