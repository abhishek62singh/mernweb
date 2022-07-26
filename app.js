const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File
dotenv.config({ path: "./config.env" })
require('./db/conn');
const port = process.env.PORT;

// Require  Modeal
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
//these method is used to
app.use(express.json());
app.use(express.urlencoded({ extanded: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})

//Registration
app.post('/register', async (req, res) => {
    try {
        // Get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        // Save method is used to create user or insert user
        const created = await createUser.save()
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})

// Login User 
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Find user if exist
        const user = await Users.findOne({ email: email });
        if (user) {
            // verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if (isMatch) {
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // expire Token in 24 hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly : true
              })
              res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid credentials");
            
              }
        }else{
            res.status(400).send("Invalid credentials");
        }
    
} catch (error) { 
res.status(400).send(error);
}
})
//Message
app.post('/message', async (req, res) => {
    try {
        // Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name: name,
            email: email,
            message : message
        });

        // Save method is used to create user or insert user
        const created = await sendMsg.save()
        console.log(created);
        res.status(200).send("sent");

    } catch (error) {
        res.status(400).send(error)
    }
})

// Logout Page 
app.get('/logout' , (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("user Logged Out")
})

// Run Server
app.listen(port, () => {
    console.log("Server is Listening")
})

