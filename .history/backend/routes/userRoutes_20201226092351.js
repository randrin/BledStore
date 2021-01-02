import express from 'express';
import User from '../models/userModel';

const userrouter = express.Router();

router.get('/createadmin', async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'admin@example.com',
            password: 'bledstore'
        });
        const createdUser = await user.save();
        res.send(createdUser)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})