import User from '../model';

export default (id, user) => {
    return User.findByIdAndUpdate(id, user, { new: true });
};
