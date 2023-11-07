import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Cities = new Schema({
    id: { type: String, required: true },
    countryId: { type: String, required: true },
    cities: [{ type: Object, required: true }],
    updatedAt: { type: Number, required: true }
});

export default mongoose.model('Cities', Cities);
