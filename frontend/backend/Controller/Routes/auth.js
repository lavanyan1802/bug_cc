const route = require("express").Router();
const userModel = require("../../Model/userModel"); // Adjust path if needed

//create user route
route.post("/user", (req, res) => {
    userModel.create(req.body).then((user)=>{
        if (!user) return res.status(400).send('there was an error')
        res.send('created user')
    })
        .catch((err)=>res.status(400),send(err))
})

route.put("/user", (req, res) => {
    const {name,password,role}=req.body
    userModel.findByIdAndUpdate(_id).then((user)=>{
        if(!user) return res.status(400).send('no user')
        res.send('updated')
    })
        .catch((err)=>{
            if (err) res.status(400).send(err)
        })
})

//login route
.post("/", (req, res) => {
    userModel.findOne(req.body).then((user)=>{
    if(!user)return res.status(400).send('incorrect email/password')
    res.cookie('user',user)
    res.send(true)
    })
    .catch((err)=>{
        if(err) res.status(400).send(err)
    })
    })
   

//get loggedin user route
.get("/",  (req, res) => {
    userModel.find().then((user)=>{
        if (!user) return res.status(400).send('no users')
        res.send(user)
    })
        .catch((err)=>{
            if (err) res.status(400).send(err)
        })
})
module.exports=route

