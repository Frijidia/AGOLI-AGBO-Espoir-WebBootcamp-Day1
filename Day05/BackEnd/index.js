require ('dotenv').config();
var bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded({ extended: true }));
const database = require('./config/db');
const checkStatus = require('./middleware/notFound');
require('./routes/user/user')(app, bcrypt);
require('./routes/todos/todos')(app, bcrypt);
require('./routes/auth/auth')(app, bcrypt);
app.use(checkStatus);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

// app.get("/Status", (req, res) => {
//     database.ping((err) => {
//         if(err) return res.status(500).send("MySQL Server is Down");
//         res.send("MySQL Server is Active");
//     })
// });

// const port = process.env.PORT
// let ts = Date.now();
// let date_ob = new Date(ts);
// let date = date_ob.getDate();
// let month = date_ob.getMonth() + 1;
// let year = date_ob.getFullYear();

// app.get('/name/:username', (req, res) => {
//   res.send('Hello World ' + req.params.username + '!')
// });

// app.get('/date', (req, res) => {
//   res.send(year + "-" + month + "-" + date);
// });

// app.get('*', function(req, res) {
//   res.json({
//     "msg": "Hello World!"
// });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

// response.data;
