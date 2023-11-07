import Subscription from '../model';

export default () => {
    return Subscription.find({ verified: { $eq: true } }, { user: 1 });
};
