import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },
    data: { type: Object, required: true }
});

export default mongoose.model('Commercial', Item);
