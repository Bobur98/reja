console.log("Web serverni boshlash");
const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs = require('fs');

// call mongodb
const db = require('./server.js').db();


let user;

fs.readFile('database/user.json', 'utf8', (err, data)=>{
    if(err){
        console.log("ERROR:", err)
    } else {
       user = data && JSON.parse(data)
    }
})

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 2: Sessions code

// 3: Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
app.post('/create-item', (req, res)=>{
    console.log(req.body)
    res.json({test: 'success'})
})

app.get('/', function(req, res) {
   res.render(`reja.ejs`)
})

app.get('/author', function(req, res) {
    res.render(`author.ejs`, {user: user})
 })
 
module.exports = app
