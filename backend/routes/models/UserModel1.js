const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    contact: Number,
    events: String,
    eventDate: String,
    eventPlace: String
})

const UserModel1=mongoose.model('userBooking',userSchema)

module.exports=UserModel1