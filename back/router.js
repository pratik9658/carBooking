var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var db = require('./config.js');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
module.exports = router;

router.get('/getuser/:username/' , function(req, res){
    db.query('SELECT * FROM user WHERE user_name = ?' , [req.params.username] , function(err , result) {
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})

router.get('/adduser/:username/:password' , function(req , res ){
    console.log(req.params.username)
    var data = {
        "user_name": req.params.username ,
        "user_pass": req.params.password 
    }
    db.query('INSERT INTO user SET ?' , [data] , function(err , result){
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    } )
})

router.get('/admin/:username' , function(req , res){
    db.query('SELECT * FROM admin WHERE admin_name = ?' , [req.params.username] , function(err , result) {
        if(err){
            res.send(err) ;
        }else{
            res.send(result);
        }
    })
})