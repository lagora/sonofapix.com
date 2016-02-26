var fs = require('fs');
var index = fs.readFileSync('index.html', 'utf8');
//Lets define a port we want to listen to
const PORT=80; 

//We need a function which handles requests and send response
function handleRequest(request, response){
  response.end(index);
}

//Lets start our server
require('http').createServer(handleRequest).listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
