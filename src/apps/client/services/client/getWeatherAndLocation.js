import request from 'superagent';
import base from '../base';
import getLocationInfo from './getLocationInfo';

export default async function ({
    location,
    locale
}) {
    let locationData = {};
    if (!location) {
        locationData = await getLocationInfo();
    }
    return base(
        request
            .get('/api/client/page/weather')
            .query({
                location: location || locationData.loc,
                locale
            })
    )
        .then(result => ({
            ...result,
            ...(!location
                ? {
                    location: {
                        city: locationData.city,
                        region: locationData.region,
                        country: locationData.country,
                        loc: locationData.loc
                    }
                }
                : {})
        }));
}
