import request from 'superagent';
import base from '../base';

const API_KEY = process.env.NEXT_PUBLIC_GET_WEATHER_API_KEY;

export default function (location, locale) {
    return base(
        request
            .get('http://api.weatherapi.com/v1/current.json')
            .query({
                key: API_KEY,
                q: location,
                aqi: 'no',
                lang: locale === 'zh-cn' ? 'zh' : locale
            })

    )
        .then(weather => weather);
}
