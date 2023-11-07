import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Countries = new Schema({
    id: { type: String, required: true },
    countries: [{ type: Object, required: true }],
    updatedAt: { type: Number, required: true }
});

export default mongoose.model('Countries', Countries);
