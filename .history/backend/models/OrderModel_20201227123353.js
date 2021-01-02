import mongoose from 'mongoose';

const orderScreen = new mongoose.Schema({
    orderItems: 
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
}, {
    timestamps: true
});

const User = mongoose.model('User', userScreen);

export default User;