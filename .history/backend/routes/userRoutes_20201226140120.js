import express from 'express';
import User from '../models/userModel';
import expressAyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.get('/createadmin', expressAyncHandler(async(req, res) => {
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
}));

userRouter.post('/signin', expressAyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(!signinUser) {
        res.status(401).send({message: 'Invalid Email or Password. Try again'});
    } else {
        res.send({
            _id: signinUser._id,
            email: signinUser.email,
            is
        })

    }
}))

export default userRouter;