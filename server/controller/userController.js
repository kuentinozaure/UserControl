'use strict';

var User = require('../model/userModel');

exports.list_all_users = function(req, res) {
  User.getAll(function(err, users) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', users);
    res.send(users);
  });
};



exports.create_a_user = function(req, res) {

    console.log("req  "+req.body.name)

  //handles null error 
   if(!req.body.name || !req.body.surname || !req.body.mail){
        res.status(400).send({ error:true, message: 'Please provide informations' });
    }
    else{
        User.createUser(req.body.name,req.body.surname,req.body.mail, function(err, user) {
            if (err)
            res.send(err);
            res.json(user);
        });
    }
};


exports.get_a_user = function(req, res) {
  User.getUserById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
      res.json(user);
  });
};


exports.update_a_user= function(req, res) {
  User.updateById(req.params.userId, new User(req.body), function(err, user) {
    if (err)
      res.send(err);
      res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
      res.json({ message: 'User successfully deleted' });
  });
};