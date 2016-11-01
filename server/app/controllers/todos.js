var Todo = require('../models/todo');

exports.getTodos = function(req, res, next) {

  Todo.find(function(err, todos) {

    if(err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
};
