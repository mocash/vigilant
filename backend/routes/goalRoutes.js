const express = require('express')
const router = express.Router()
// const {
//   getGoals,
//   setGoal,
//   updateGoal,
//   deleteGoal,
// } = require('../controllers/goalController')

// const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
router.get('/',(req,res)=>{
    res.status(200).json({message: 'this goals'})
})
module.exports = router