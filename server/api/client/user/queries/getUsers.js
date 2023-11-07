import User from '../model';

export default () => {
    return User.find({});
};
