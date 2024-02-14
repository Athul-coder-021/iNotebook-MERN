const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        required:true,
        trim:true,
    },
    description:{
        type: String,
        required:true,
        trim:true,
    },
    tag:{
        type:String,
        default:"General"
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model("notes",NotesSchema)