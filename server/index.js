const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://root:root@cluster0.rmbquaq.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.post("/register", async (req, resp) => {
    try {
        const newPassword = await bcrypt.hash(req.body.pass, 10)

        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.newPassword;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
  
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.post('/login', async (req,res) =>{
    const user = await User.findOne({ 
        email: req.body.email, 
        pass: req.body.pass
    })

    if(user){
        const token = jwt.sign(
        {
            email: req.body.email,
            pass: req.body.pass,
        }, 
        'secret123'
     )
       return res.json({status: 'ok', user: token})
    } else{
        return res.json({status: 'ok', user: false})
    }
});


app.listen(5000, ()=>{
    console.log('Node API is running on port 5000')
})