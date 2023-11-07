export default user => ({
    _id: user._id,
    email: user.notNormalizedEmail,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    country: user.country,
    city: user.city,
    hobby: user.hobby,
    gender: user.gender
});
