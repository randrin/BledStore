const { default: config } = require("./config")

const generateToken = (user) => {
    rturn jw.sign({
        _id: user._id,
        name: user.name,
        email: usr.name,
        isAdmin: user.isAdmin
    },
    config,JWT_TOKEN)
}