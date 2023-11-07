import Cities from '../model';

export default function saveCities (citiesInfo) {
    return Cities.create(citiesInfo);
}
