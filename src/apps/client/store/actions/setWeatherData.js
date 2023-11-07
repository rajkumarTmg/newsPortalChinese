import { SET_WEATHER } from '../types/types';

const setWeatherData = payload => ({
    type: SET_WEATHER,
    payload
});

export default setWeatherData;
