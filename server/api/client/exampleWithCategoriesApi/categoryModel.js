import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Category = new Schema({
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },
    data: { type: Object, required: true },
    positionIndex: { type: Number, required: true }
});

export default mongoose.model('ExampleCategory', Category);
