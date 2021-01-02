import express from 'express';
import User from '../models/userModel';
import expressA from 'express-async-handler'

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

userRouter.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(!signinUser) {
        res.status(401).send({message: 'Invalid Email or Password. Try again'})
    }
})

export default userRouter;