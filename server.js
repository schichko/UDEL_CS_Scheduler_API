var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
const port = 8080;

/*
    Connecting to the mongodb cluster, please dont hack me.
*/
var db = mongo.connect("mongodb+srv://muhammet:test123@cluster0-dg6n3.mongodb.net/Degree_Plans?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(error, response){
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected!");
    }
});

/*
    Express makes it easy to handle HTTP requests for our API that will be
    used by our client-side angular code.
*/
 var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var plansSchema = new Schema({
    objectId: mongo.Schema.Types.ObjectId,
    planID:  Number,
    semester_1: Array,
    semester_2: Array
  });

var Plan = mongo.model('plans', plansSchema, 'plans');

app.post('/api/update-plan/:planID', function(req, res){
    Plan.save({"planID":req.params.planID}, function(err, data){
        if(err){
            res.send(err);
        }

        res.send({data: "The plan was deleted"});
    });
});

app.get('/api/plans/:planID', function(req, res){
    Plan.find({"planID":req.params.planID}, function(err, data){
        if(err){
            res.send(err);
        }

        console.log(data);
        res.send(data);
    });
});

app.delete('/api/delete-plan/:planID', function(req, res){
    Plan.deleteOne({"planID":req.params.planID}, function(err, data){
        if(err){
            res.send(err);
        }

        res.send({data: "The plan was deleted"});
    });
});

app.listen(port, () => console.log(`Backend listening on port ${port}!`))