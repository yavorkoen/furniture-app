const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(error => console.log(error))
    
});

userSchema.static('findByEmail', function(email){
    return this.findOne({email})
})

userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password)
})

const User = mongoose.model('User', userSchema);

module.exports = User;