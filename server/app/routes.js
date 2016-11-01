var TodoController = require('./controllers/todos');
var express = require('express');

module.exports = function(app) {

  var todoroutes = express.Router();


  todoroutes.get('/', TodoController.getTodos);


  app.use('/api', todoroutes);

}
