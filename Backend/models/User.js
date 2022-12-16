const mongoose = require('mongoose');
const {Schema} = mongoose;


const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
  });


// syntax module.exports = mongoose.model('model ka name',schema ka name)
const User = mongoose.model('user',UserSchema);
User.createIndexes();
module.exports = User;