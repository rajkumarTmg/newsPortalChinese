import Admin from '../model';

export default function (_id, credentials) {
    return Admin.findByIdAndUpdate(_id, credentials, { new: true });
}
