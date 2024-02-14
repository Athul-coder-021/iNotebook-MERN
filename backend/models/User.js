const mongoose = require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model("user",UserSchema)