import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },
    data: { type: Object, required: true },
    answers: { type: Object, required: false },
    completed: { type: Boolean, default: false }
});

export default mongoose.model('Vote', Item);
