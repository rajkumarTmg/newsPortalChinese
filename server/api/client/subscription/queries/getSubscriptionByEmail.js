import Subscription from '../model';

export default email => {
    return Subscription.findOne({ 'user.email': email });
};
