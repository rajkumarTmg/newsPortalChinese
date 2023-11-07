import User from '../model';

export default _id => {
    return User.findById(_id);
};
