import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
const superagent = require('superagent');

export default async function (req, res) {
    const {
        location,
        locale
    } = req.query;
    try {
        superagent.get('http://api.weatherapi.com/v1/current.json')
            .query({
                key: process.env.NEXT_PUBLIC_GET_WEATHER_API_KEY,
                q: location,
                aqi: 'no',
                lang: locale === 'zh-cn' ? 'zh' : locale
            })
            .end((weatherErr, weatherRes) => {
                if (weatherErr) {
                    return res.status(SERVER_ERROR_STATUS_CODE).end();
                }
                const weatherData = {
                    icon: weatherRes.body.current.condition.icon,
                    condition: weatherRes.body.current.condition.text,
                    tempC: weatherRes.body.current.temp_c,
                    tempF: weatherRes.body.current.temp_f
                };
                res.status(OKAY_STATUS_CODE).send({ weather: weatherData });
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
