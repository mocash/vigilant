
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userGoal')

const registerUser = asyncHandler( async(req,res)=>{

    const {name,email,password} = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('No user info')

    }


    const userExist = await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error('User Exist')
        
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid info')
    }  
})


const loginUser = asyncHandler( async(req,res)=>{
    const {email, password} = req.body
    
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid credentials')
    }})

const getMe = asyncHandler( async(req,res)=>{
    const {_id,name,email} = await User.findById(req.user.id)
    res.json({
        id: _id,
        name,
        email
    })


    res.json({message: 'This is getMe'})
})


const genToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}



module.exports = {
  registerUser,
  loginUser,
  getMe  
}