import Cities from '../model';

export default function getCities (countryId) {
    return Cities.findOne({ countryId });
}
