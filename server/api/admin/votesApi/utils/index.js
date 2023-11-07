import uniqId from 'uniqid';
import { LOCALES } from '../../../../../src/apps/client/constants';

export default function getVoteWithCorrectVariantIds (item) {
    const variantUniqIds = [...Array(
        Math.max(...Object.entries(item).map(([_, value]) => {
            return value.votingOptions.length;
        }
        ))
    )].map(() => {
        return uniqId();
    });

    const voteDataWithUniqIds = LOCALES.map((locale) => {
        return {
            [locale]:
            {
                ...item[locale],
                votingOptions: item[locale]
                    .votingOptions.map((option, index) => { return { ...option, id: uniqId(), variantId: variantUniqIds[index] }; })
            }

        };
    })
        .reduce((acc, current) => {
            return {
                data: { ...acc.data, ...current }
            };
        }, {
            data: {}
        });

    const transformedVoteItem = Object.entries(item)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                ...(voteDataWithUniqIds.data[key]
                    ? {
                        [key]: voteDataWithUniqIds.data[key]
                    }
                    : {
                        [key]: value
                    })
            };
        }, {});

    return transformedVoteItem;
};
