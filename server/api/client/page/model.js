import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Page = new Schema({
    pageId: { type: String, required: true, unique: true },
    data: { type: Object, required: true },
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true }
});

export default mongoose.model('Page', Page);
