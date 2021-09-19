var express = require('express');
var path = require("path");

var app = express();

//midleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup the server port
const port = process.env.PORT || 5000;

//define root route
app.get('/', (request, response) => {
    response.send("hello");
})

//import trip routes
const tripRoutes = require('./src/routes/trip.route');

//create trip routes
app.use('api/v1/trip', tripRoutes);


app.listen(port, () => {
    console.log(`Server listing at port ${port}`);
});