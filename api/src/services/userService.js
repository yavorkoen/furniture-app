const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('../utils/jwt.js');
const { SECRET } = require('../constants.js');


exports.register = ({ email, password }) => {
    return User.create({ email, password });

};

exports.login = ({ email, password }) => {
    return User.findByEmail(email)
        .then(user => {
            if (user) {
                return Promise.all([user.validatePassword(password), user]);
            } else {
                throw { message: 'Incorrect email or password' }
            }
        })
        .then(([isValid, user]) => {
            if (isValid) {
                console.log('login service', user)
                return user;
            } else {
                throw { message: 'Incorrect email or password' }

            }
        })
        .catch(error => console.log(error));
}

exports.createToken = (user) => {
    return jwt.sign({_id: user._id, email: user.email}, SECRET, {expiresIn: '2h'})
}






