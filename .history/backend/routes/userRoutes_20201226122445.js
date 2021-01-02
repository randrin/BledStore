import express from 'express';
import User from '../models/userModel';

const userRouter = express.Router();

userRouter.get('/createadmin', async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'admin@example.com',
            password: 'bledstore',
            isAdmin: true
        });
        const createdUser = await user.save();
        res.send(createdUser)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
});

userRouter.post('/signin', (req, res) => {
    const signinUser = await User.findOne({
        email: req.body
    })
})

export default userRouter;