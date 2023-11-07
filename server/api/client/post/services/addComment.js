import { BAD_REQUEST_STATUS_CODE, OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../queries/editItem';
import getItemById from '../queries/getItemById';
import validate from '../../../../helpers/validation/validate';
import { commentValidation } from '../utils/validation';
import mongoose from 'mongoose';

export default function (req, res) {
    const { postId, userId } = req.query;
    const { userName, text } = req.body;

    const now = Date.now();
    const comment = {
        userId,
        userName,
        text,
        createdAt: now,
        _id: mongoose.Types.ObjectId()
    };
    const isValid = validate(comment, commentValidation);

    if (!isValid) {
        return res.status(BAD_REQUEST_STATUS_CODE).send({ error: 'Comment is not valid' });
    }

    try {
        getItemById(postId)
            .then((article) => {
                const { comments } = article;
                const commentsModified = [...comments.list, comment];
                editItem(postId, { comments: { count: commentsModified.length, list: commentsModified } })
                    .then(() => {
                        res.status(OKAY_STATUS_CODE).send();
                    })
                    .catch(() => {
                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    });
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
