const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Add a pre-save hook to ensure password and confirmPassword match
UserSchema.pre('save', function (next) {
    if (this.password !== this.confirmPassword) {
        const err = new Error('Passwords do not match');
        return next(err);
    }
    next();
});

// Remove confirmPassword field before saving to the database
UserSchema.pre('save', function (next) {
    this.confirmPassword = undefined;
    next();
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
