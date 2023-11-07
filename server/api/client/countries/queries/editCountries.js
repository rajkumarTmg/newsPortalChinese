import Countries from '../model';

export default function editCountries (countriesInfo) {
    return Countries.findOneAndUpdate({}, countriesInfo, { new: true });
}
