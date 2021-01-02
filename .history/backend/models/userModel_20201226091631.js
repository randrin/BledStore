import mongoose from 'mongoose';


const userScreen = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true},
    name: {type: String, required: true}
})