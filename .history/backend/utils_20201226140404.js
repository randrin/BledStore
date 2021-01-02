const generateToken = (user) => {
    rturn jwt.sign({
        _id: user._id
    })
}