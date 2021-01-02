import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: usr.name,
        isAdmin: user.isAdmin
    },
    config.JWT_TOKEN)
}

export default ge