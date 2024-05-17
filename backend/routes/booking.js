const express=require('express')
const bodyParser=require('body-parser')
const UserModel1=require('./models/UserModel1')
const router=express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("User page")
})

router.post('/post',(req,res)=>{
    console.log("req.body")
    const newUser=new UserModel1(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("users booking page")
})

router.get('/get',(req,res)=>{
    UserModel1.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.get('/get/:id',(req,res)=>{
    UserModel1.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body)
    UserModel1.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User update page")
})
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    UserModel1.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User Delete page")
})


module.exports=router