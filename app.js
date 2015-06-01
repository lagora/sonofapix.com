var express = require('express');
var app = express();
var fs = require('fs');
var marked = require('marked');
var moment = require('moment');
var path = require('path');
var blogindex = require('./blog/index.json');

app.use('/img', express.static(__dirname + "/img"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));

//app.use('/admin/:md5', function (req, res, next) {
//    res.render('admin');
//});

app.use('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('sonofapix.com running on http://%s:%s', host, port);
});

var io = require('socket.io').listen(server);
io.on('ready', function (socket) {
    console.log('ready');
    socket.emit('blog', blogindex);
});