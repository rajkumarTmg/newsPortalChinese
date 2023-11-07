import Subscription from '../model';

export default _id => {
    return Subscription.findById(_id);
};
