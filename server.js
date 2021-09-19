const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//const db = require("./app/models");

//db.sequelize.sync();

//midleware
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//define root route
app.get('/', (request, response) => {
    response.send("hello");
})

// //import trip routes
// const tripRoutes = require('./src/routes/trip.route');

// //create trip routes
// app.use('api/v1/trip', tripRoutes);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listing at port ${PORT}`);
});