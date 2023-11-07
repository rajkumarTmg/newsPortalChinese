import Admin from '../model';

export default function (email) {
    return Admin.findOne({ email });
}
