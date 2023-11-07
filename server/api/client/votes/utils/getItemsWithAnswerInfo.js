export default function (items, userInfo) {
    return items.map((item) => {
        const answersEntries = item.answers ? Object.entries(item.answers) : null;
        if (!answersEntries) {
            return {
                ...item._doc,
                answers: [],
                selectedOption: null
            };
        }
        const totalVotes = answersEntries.reduce((acc, current) => (
            acc + current[1].length
        )
        , 0);
        const selectedOption = userInfo
            ? answersEntries.find((option) => {
                return option[1].some((user) => {
                    return userInfo === user.userId.toString();
                });
            }
            )
            : null;
        return {
            ...item._doc,
            answers: answersEntries.reduce((acc, currentOption) => {
                const percent = (currentOption[1].length / totalVotes * 100);
                return {
                    ...acc,
                    [currentOption[0]]: {
                        voteCount: currentOption[1].length,
                        percent: percent % 1 === 0 ? percent : percent.toFixed(2)
                    }
                };
            }, {}),
            selectedOption: selectedOption ? selectedOption[0] : null
        };
    });
}
