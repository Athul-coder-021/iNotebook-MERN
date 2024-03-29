const mongoose = require('mongoose');
const {Schema}= mongoose;
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
const User = mongoose.model("user",UserSchema)
// User.createIndexes();
module.exports = User;