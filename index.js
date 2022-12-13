const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/userModel')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://GANESH:GAnesh21895aug1994@cluster0.85lrpkd.mongodb.net/login_page');


app.post('/api/register',(req,res)=>{
    console.log(req.body)
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
     res.json({ status: "ok" , user: "registered" })
})
app.get("/", (req, res)=> {
    res.send("Welcome to login page");
})
app.post('/api/login',(req,res)=>{
    // console.log(req.body)
    User.findOne({email:req.body.email , password:req.body.password})
    .then((user)=>{
            
            const token = jwt.sign(
                {
                    name : user.name,
                    email : user.email
                },
                'secret123'
            )
            res.json({ status: "ok" , user : token})
        
        // console.log(user)
    })
})

app.listen(1500, () => {
    console.log('server started on port 1500')
})