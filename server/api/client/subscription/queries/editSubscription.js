import Subscription from '../model';

export default (id, subscription) => {
    return Subscription.findByIdAndUpdate(id, subscription, { new: true });
};
