const mongoose=require('mongoose');
let UserSchema=new mongoose.Schema({
  "_id":String,
  "name":String,
  "password":String
})
let userModel=mongoose.model('users',UserSchema);
module.exports=userModel;