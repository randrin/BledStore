import express from 'express';
import User from './models/userModel';

const router = express.Router();

router.get('/createadmin', async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email:
        });
    } catch (error) {
        
    }
})