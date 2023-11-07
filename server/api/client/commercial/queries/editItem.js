import CommercialItem from '../commercialModel';

export default function (_id, item) {
    return CommercialItem.findByIdAndUpdate(_id, item, { new: true });
}
