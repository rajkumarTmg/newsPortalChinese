import User from '../model';

export default (email, userName) => {
    return User.findOne({ $or: [{ email }, { userName }] });
};
