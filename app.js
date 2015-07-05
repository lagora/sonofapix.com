var express = require('express');
var app = express();
var cons = require('consolidate');
var fs = require('fs');
// var blog = require('./routes/blog.js');

// app.set('view engine', cons.mustache); // register the template engine
// app.set('view engine', 'html'); // register the template engine
// app.set('views', __dirname + '/views'); // specify the views directory

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));

app.set('views', __dirname + '/views');
app.engine('html', cons.mustache);
app.set('view engine', 'html');

app.use(function (req, res, next) {
  app.locals.games = JSON.parse(fs.readFileSync(__dirname + '/games.json'));

  // var templateList = fs.readdirSync(__dirname + '/views').filter(function (filename) {
  //   return 'layout.html' !== filename;
  // });
  // app.locals.templateList = {};
  // templateList.map(function (filename) {
  //   app.locals.templateList[filename] = fs.readFileSync(__dirname + '/views/' + filename, {encoding: 'utf8'});
  // });
  next();
});

app.get('/', function (req, res) {
  res.render('index', {js: 'index'});
});

app.get('/games', function (req, res) {
  res.send(app.locals.games);
});

// app.get('/template/:filename', function (req, res, next) {
//   console.log(app.locals);
//   res.send(app.locals.templateList[req.params.filename]);
// });

var getBlogIndex = function () {
  return JSON.parse(fs.readFileSync('blog/index.json', {encoding:'utf8'}));
};

app.get('/blog', function (req, res, next) {
  var blogIndex = getBlogIndex();
  var posts = blogIndex.map(function (data) {
    data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    return data;
  });
  res.send(posts);
});
app.get('/blog/last', function (req, res, next) {
  res.send(
    getBlogIndex().slice(0, 1).map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
      return data;
    })[0]
  );
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
