import mongoose from 'mongoose';


const userScreen = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: tr}
})