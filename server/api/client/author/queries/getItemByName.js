import Item from '../model';

export default function (name) {
    return Item.find({ 'data.zh-cn.name': { $eq: name } });
}
