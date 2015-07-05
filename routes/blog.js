
var fs = require('fs');

var getBlogIndex = function () {
  return JSON.parse(fs.readFileSync('blog/index.json', {encoding:'utf8'}));
};

module.exports = function (app) {

  app.get('/blog', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex.map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
      return data;
    });
    res.send(posts);
    next();
  });

  app.get('/blog/about/:tag', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return -1 < data.tags.indexOf(req.params.tag);
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/title/:title', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return -1 < data.title.indexOf(req.params.title);
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/on/:start', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime = req.params.start;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/from/:start', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime <= req.params.start;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/to/:end', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime >= req.params.end;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  var getBlogIndex = function () {
    return JSON.parse(fs.readFileSync('blog/index.json', {encoding:'utf8'}));
  }

  app.get('/blog', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex.map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
      return data;
    });
    res.send(posts);
    next();
  });

  app.get('/blog/about/:tag', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return -1 < data.tags.indexOf(req.params.tag);
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/title/:title', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return -1 < data.title.indexOf(req.params.title);
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/on/:start', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime = req.params.start;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/from/:start', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime <= req.params.start;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

  app.get('/blog/to/:end', function (req, res, next) {
    var blogIndex = getBlogIndex();
    var posts = blogIndex
    .filter(function (data) {
      return data.datetime >= req.params.end;
    })
    .map(function (data) {
      data.content = fs.readFileSync('blog/' + data.file, {encoding:'utf8'});
    });
    res.send(posts);
    next();
  });

};
