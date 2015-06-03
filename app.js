var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');
var marked = require('marked');
var moment = require('moment');
var path = require('path');
var blogindex = require('./blog/index.json');
console.log(blogindex);

server.listen(80);

io.emit('blog', blogindex);
io.on('ready', function (socket) {
    console.log('ready');
    socket.emit('blog', blogindex);
});

app.use('/img', express.static(__dirname + "/img"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));

app.use('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});