const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        Ref: "User"
    },
    text: {
        type: String,
        required: [true, "Text are required"]


    }
}, {
    
timestamps: true
})




module.exports = mongoose.model( 'Goal', goalSchema)