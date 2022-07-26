const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db, {
    userNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connection Successfull");
}).catch((e)=>{
    console.log(e);
})


