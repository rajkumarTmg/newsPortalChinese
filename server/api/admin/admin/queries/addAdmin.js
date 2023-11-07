import Admin from '../model';

export default function (credential) {
    return Admin.create(credential);
}
