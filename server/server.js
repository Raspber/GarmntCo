// This loads the variables in the .env file so they can be accessed via process.env.VAR_NAME
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { userRouter } = require("./routes/user.routes");

const port = process.env.PORT;

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require("./config/mongoose.config");

const app = express();

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8080
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// req.body undefined without this!
app.use(express.json());

// Adding express-session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET, // use your session secret here
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // set to true if your app is on https
    })
);

// '/api/destinations will be prepended to all the routes added onto the destinationRouter
app.use("/api", userRouter);

app.listen(port, () =>
    console.log(`Listening on port ${port} for Requests to Respond to.`)
);
