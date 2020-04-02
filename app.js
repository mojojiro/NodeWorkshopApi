const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

// app.use('/posts',()=>{
//   console.log('This is meddleware running');
// });

//Import Routes
const postsRoute = require('./routes/services');

app.use('/services',postsRoute);

//ROUTES
app.get('/',(req,res) => {
  res.send('We are on home');
});

app.get('/services',(req,res) => {
  res.send('We are on services');
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser:true },()=>
  console.log('connected to DB!')
);

app.listen(3000);
