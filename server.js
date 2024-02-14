const http = require('http');
const mongodb = require('mongodb')
let db;
const connectionString = 'mongodb+srv://Brian:10031998b@cluster0.bkrlpmt.mongodb.net/Reja'

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err, client)=>{
    if (err) console.log('ERROR on connection mongodb ', err);
    else {
        console.log('Mongodb is connected successefully');
        module.exports = client;

        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`)
        })
    }
})

