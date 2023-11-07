import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number, required: true },
    data: { type: Object, required: true },
    likes: { count: { type: Number, default: 0 }, list: { type: Array } },
    comments: {
        count: { type: Number, default: 0 },
        list: {
            type: [{
                userId: String,
                userName: String,
                text: String,
                createdAt: Number,
                likes: { count: { type: Number, default: 0 }, list: { type: Array } },
                verified: { type: Boolean, default: false },
                _id: { type: Object }
            }]
        }
    },
    views: { type: Number, default: 0 },
    shares: { type: Number, default: 0 }
});

Item.index({
    'data.en.title': 'text',
    'data.zh-cn.title': 'text',
    'data.zh-tw.title': 'text'
});
const Article = mongoose.model('Article', Item);
Article.createIndexes();

export { Article as default };
