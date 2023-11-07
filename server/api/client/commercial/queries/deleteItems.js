import CommercialItem from '../commercialModel';

export default function (ids) {
    return CommercialItem.deleteMany({ _id: { $in: ids } });
}
