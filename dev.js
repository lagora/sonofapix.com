var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        console.log('restarted');
        file.serve(request, response);
    }).resume();
}).listen(8081);
