'use strict';

module.exports = function(app) {
  const db = require('../controllers/todoListController');

  //Routes
  app.get('/', (req, res) => {
    res.send("Node.js, Express, and Postgres API")
  });

  app.route('/tasks')
    .get(db.list_all_tasks)
    .post(db.create_a_task);


  app.route('/tasks/:id')
    .get(db.read_a_task)
    .put(db.update_a_task)
    .delete(db.delete_a_task);
};
