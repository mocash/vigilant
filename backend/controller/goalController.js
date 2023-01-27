const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler( async(req,res) => {
    res.status(200).json({message: 'Get Goals'})
})

const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Add text in the text area")
    }
    res.status(200).json({message: 'Set Goals'})
})



const updateGoal = asyncHandler( async(req,res)=>{
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})


const deleteGoal =asyncHandler( async(req,res)=>{
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
  