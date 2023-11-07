import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, unique: true, required: true },
    notNormalizedEmail: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    gender: { type: String },
    birthdate: { type: Number },
    hobby: { type: String },
    verified: { type: Boolean, default: false },
    draft: { type: Object, default: {} }
});

export default mongoose.model('User', User);
