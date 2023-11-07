import Countries from '../model';

export default function getCountries () {
    return Countries.findOne();
}
