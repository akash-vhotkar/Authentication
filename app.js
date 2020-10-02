const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const ejslint = require('ejs-lint')
const partials = require('express-partials')

const flash = require('connect-flash');
const session = require('express-session');

const app = express();

//view engine has been aettlled  succefully  and completed 
// app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

const db = require('./config/key').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('moongose connected'))
    .catch(err => console.log(err))


app.use(bodyparser.urlencoded({ extended: true }));
//express session
//connect flash

// global var
const port = process.env.PORT || 4000;
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.listen(port, (error) => {
    if (error) console.log(error);
    else console.log("server was listnig on the port 4000");
})

module.exports = db;