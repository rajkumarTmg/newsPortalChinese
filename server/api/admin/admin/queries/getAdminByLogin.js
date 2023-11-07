import Admin from '../model';

export default function (login) {
    return Admin.findOne({ login });
}
