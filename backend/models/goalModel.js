const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Text are required"]


    }
}, {
    
timestamps: true
})




module.exports = mongoose.model( 'Goal', goalSchema)