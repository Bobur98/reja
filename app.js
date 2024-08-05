console.log("Web serverni boshlash");

const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const { MORGAN_FORMAT } = require('./config.js');
const mongodb = require('mongodb');

// Call mongodb
const db = require('./server.js').db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(MORGAN_FORMAT));

// 2: Sessions code

// 3: Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
app.post('/create-item', (req, res) => {
    const new_reja = req.body.reja;
    db.collection('plans').insertOne({ reja: new_reja }, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    db.collection('plans')
        .deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
            res.json({ state: 'success' });
        });
});

app.post('/edit-item', (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection('plans')
        .findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) }, { $set: { reja: data.new_input } }, (err, data) => {
            res.json({ state: 'hamma rejalar ochirildi' });
        });
});

app.post('/delete-all', (req, res) => {
    if (req.body.delete_all) {
        db.collection('plans').deleteMany(() => {
            res.json({ state: 'all plans are deleted' });
        });
    }
});

app.get('/', (req, res) => {
    console.log('user entered /');
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end('Someting went wrong');
        } else {
            res.render('reja', { items: data ? data : '' });
        }
    });
});

// app.get('/author', function(req, res) {
//     res.render(`author.ejs`, {user: user});
// });

module.exports = app;
