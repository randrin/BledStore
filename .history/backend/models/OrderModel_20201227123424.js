import mongoose from 'mongoose';

const orderScreen = new mongoose.Schema({
    orderItems: [
        name: {type: String, required: true},
    image: {type: String, required: true, index: true, unique: true},
    price: {type: N, required: true},
    qty: {type: Boolean, required: true, default: false}
    ]
    
}, {
    timestamps: true
});

const User = mongoose.model('User', userScreen);

export default User;