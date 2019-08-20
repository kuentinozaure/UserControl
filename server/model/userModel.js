'user strict';
var sql = require('./db.js');

//User object constructor
var User = function(user){
    this.name = user.name;
    this.surname = user.surname;
    this.mail = user.mail;
};

User.createUser = function (name,surname,mail, result) {   
        sql.query("INSERT INTO personne (`NOM`, `PRENOM`, `MAIL`) values (?,?,?) ", [name,surname,mail], function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
User.getUserById = function (userId, result) {
        sql.query("Select * from personne where ID = ? ", userId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAll = function (result) {
        sql.query("Select * from personne", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('personne : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(id, user, result){
  sql.query("UPDATE personne SET NOM = ?,PRENOM = ?, MAIL= ? WHERE id = ?", [user.name,user.surname,user.mail, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM personne WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;