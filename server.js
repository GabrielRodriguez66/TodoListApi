//Importing dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      routes = require('./api/routes/todoListRoutes');

//Creating express instance
const app = express(),
      port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the routes

app.listen(port, () => {
  console.log(`Todo list RESTful API server started on: ${port}.`)
});
