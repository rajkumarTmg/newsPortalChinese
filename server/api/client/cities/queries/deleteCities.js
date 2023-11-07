import Cities from '../model';

export default function deleteCities () {
    return Cities.deleteMany({});
}
