import User from '../model';

export default email => {
    return User.findOne({ email });
};
