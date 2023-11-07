import VoteItem from '../voteModel';

export default function (ids) {
    return VoteItem.deleteMany({ _id: { $in: ids } });
}
