var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
const port = 3000;

/*
    Connecting to the mongodb cluster, please dont hack me.
*/
var db = mongo.connect("mongodb+srv://muhammet:test123@cluster0-dg6n3.mongodb.net/sample_mflix?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(error, response){
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
    //res.setHeader('Access-Control-Allow-Credentials', true);
});

var Schema = mongo.Schema;

var commentsSchema = new Schema({
    objectId: mongo.Schema.Types.ObjectId,
    name:  String,
    email: String,
    movie_id: mongo.Schema.Types.ObjectId,
    text: String,
    date: { type: Date, default: Date.now }
  });

var Comment = mongo.model('comments', commentsSchema, 'comments');

var angryComment = new Comment(
    {name: 'test user', 
    email: 'test@amazon.com',
    movie_id: null,
    text: 'this movie sucked, it wouldnt even load!'
    });

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/comments', function(req, res){
    Comment.find({"name":"test"}, function(err, data){
        if(err){
            res.send(err);
        }

        res.send(data);
        console.log(data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))