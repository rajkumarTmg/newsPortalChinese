import Subscription from '../model';

export default function (id) {
    return Subscription.deleteOne({ _id: { $eq: id } });
}
