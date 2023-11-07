import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Subscription = new Schema({
    user: {
        email: { type: String, unique: true, required: true },
        notNormalizedEmail: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        phone: { type: String }
    },
    createdAt: { type: Number, required: true },
    verified: { type: Boolean, default: false }
});

export default mongoose.model('Subscription', Subscription);
