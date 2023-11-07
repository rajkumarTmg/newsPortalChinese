import VoteItem from '../voteModel';

export default function (completed) {
    return VoteItem.find({ completed: { $eq: completed } });
}
