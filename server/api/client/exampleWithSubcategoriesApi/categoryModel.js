import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategoryWithSubcategory = new Schema({
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },
    data: { type: Object, required: true },
    positionIndex: { type: Number, required: true },
    subcategories: [{
        data: { type: Object, required: true },
        createdAt: { type: Number, required: true },
        updatedAt: { type: Number, required: true },
        positionIndex: { type: Number, required: true }
    }]
});

export default mongoose.model('ExampleCategoryWithSubcategory', CategoryWithSubcategory);
