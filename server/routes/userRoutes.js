'use strict';
module.exports = function(app) {
  var userController = require('../controller/userController');

  // todoList Routes
  app.route('/user/')
    .get(userController.list_all_users)
    .post(userController.create_a_user)

    app.route('/user/:userId')
    .get(userController.get_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);
    };