const express=require('express');
const mongoose=require('mongoose');
const bodyPaser=require('body-parser');

const app=express();

const mongoDBUrl = "mongodb+srv://node:node@cluster0.gbllfk8.mongodb.net/form"

const formLogin = require('./routes/form');



app.use(formLogin);

mongoose.connect(mongoDBUrl)
.then(res => {
    app.listen(5000);
console.log('the server is run on 500')
console.log('DB Conected!!')
})
.catch(err => {
    console.log("error");
})


