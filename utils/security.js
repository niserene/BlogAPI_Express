
function getUser(user){

    const newUser = {
        email: user.email,
        username:user.username,
        bio: user.bio,
        image: user.image,
        token:user.token,
    }
    return newUser
}


module.exports = {
    getUser
}