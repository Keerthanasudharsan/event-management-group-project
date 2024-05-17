const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    message: String,
})

const UserModel2=mongoose.model('userContact',userSchema)

module.exports=UserModel2