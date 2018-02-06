var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

mongoose.connect('mongodb://localhost/blog') //连接本地数据库blog 

var db = mongoose.connection;

// 连接成功
db.on('open', function() {
	console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function() {
	console.log('MongoDB Connection Error');
});

var kittySchema = mongoose.Schema({
	name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function() {
	var greeting = this.name ?
		"Meow name is " + this.name :
		"I don't have a name";
	console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({
	name: 'Silence'
});
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({
	name: 'fluffy'
});
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function(err, fluffy) {
	if(err) {
		return console.error(err);
	}
	fluffy.speak();
});

Kitten.find(function(err, kittens) {
	if(err) return console.error(err);
	console.log('kittens:',kittens);
})

Kitten.find({ name: /^fluff/ }, function(){
	console.log('fluffy found');
});