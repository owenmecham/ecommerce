require('dotenv').config()
const massive = require('massive')
const delegateRoutes = require('./routers/delegate.router');
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const getDb = require('./database/bootstrap.database');
const path = require('path');
const authCtrl = require('./controllers/authController');

const SERVER_PORT = process.env.CONNECTION_PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const SESSION_SECRET = process.env.SESSION_SECRET;
const express = require("express"),
    app = express(),
    port = SERVER_PORT || 5000,
    cors = require("cors");

//app.use(cors());
app.use(express.json());
app.listen(port, () => console.log("Backend server live on " + port));

delegateRoutes(app);

app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
});
//#auth endpoints
app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/logout', authCtrl.logout)
app.get('/api/user', authCtrl.getUser)