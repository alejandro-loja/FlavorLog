const express = require('express');

const PORT = process.env.PORT || 8080

// const mysql = require('mysql');

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/flavorlog_controller.js");

app.use(routes);


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})