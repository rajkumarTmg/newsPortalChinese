import VoteItem from '../voteModel';

export default function (_id, item) {
    return VoteItem.findByIdAndUpdate(_id, item, { new: true });
}
