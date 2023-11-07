import VoteItem from '../voteModel';

export default function (_id, optionId, userId, locale) {
    const field = `answers.${optionId}`;
    return VoteItem.findByIdAndUpdate(_id, {
        $push: {
            [field]: { userId, locale }
        }
    }, { new: true });
}
