const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userGoal');


const getGoals = asyncHandler( async(req,res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Add text in the text area")
    }
    const goal = await Goal.create({
        text:  req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})



const updateGoal = asyncHandler( async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }


    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not found')
        
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')      
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})


const deleteGoal =asyncHandler( async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not found')
        
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')      
    }


    await goal.remove()


    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
  