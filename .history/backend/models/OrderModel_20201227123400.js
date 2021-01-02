import mongoose from 'mongoose';

const orderScreen = new mongoose.Schema({
    orderItems: [

    ]
    
}, {
    timestamps: true
});

const User = mongoose.model('User', userScreen);

export default User;