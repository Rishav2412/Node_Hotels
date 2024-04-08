const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const person = require('./models/person'); 
const menu = require('./models/menu'); 
const MenuItem = require('./models/menu');

app.get('/', function(req,res){
    res.send('Hello Rishav.. You will soon become a pilot')
})

app.get('/chicken', function(req, res){
    res.send('I would love to serve you chicken')
})

const menuItemRoutes = require('./routes/menuItemRoutes');
const personRoutes = require('./routes/personRoutes');

app.use('/menu', menuItemRoutes);
app.use('/person', personRoutes);



app.listen(PORT, ()=>{
    console.log('Server Zinda hai Bhai')
})