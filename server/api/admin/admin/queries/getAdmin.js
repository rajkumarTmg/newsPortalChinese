import Admin from '../model';

export default _id => {
    return Admin.findById(_id);
};
