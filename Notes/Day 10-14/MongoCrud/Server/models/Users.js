const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String

})
const UserSchema1=new mongoose.Schema({
    ID:String,
    name:String,
    Salary:Number,
    contact:Array

})

const UserModel=mongoose.model("users",UserSchema)
const UserModel1=mongoose.model("emp1",UserSchema1)
module.exports={UserModel,UserModel1}