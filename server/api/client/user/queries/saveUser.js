import User from '../model';

export default user => {
    return User.create(user);
};
