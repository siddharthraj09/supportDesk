const asyncHandler = require('express-async-handler')
const bcrypt =require('bcryptjs')

const User =require('../models/userModels')

//@desc Register a new user
//@route /api/users
//@access Public
const registerUser = asyncHandler( async (req,res) => {
    const {name,email,password} = req.body

    //validation
    if(!name || !email || !password){
         res.status(400)
        throw new Error('Please include all all fields')
    }
    
    res.send('Register route')
})

//@desc Login a new users
//@route /api/users.login
//@access Public
const loginUser =asyncHandler( async (req,res) => {
    res.send('login route')
})

module.exports={
    registerUser,
    loginUser
}
