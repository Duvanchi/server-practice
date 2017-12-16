//require/import the http module
var http = require("http");

// we need to define a port to listen on
// standardized port is 8080
var PORT = 8080;

// creating a generic function to handle requests & responses
function handleRequest(request, response) {
	response.end("It Works!! Path Hit: " + request.url);
}

// We will use Node http package to create our server
// then pass it the handleRequest function to empower it with functionality
// %s allows you to dynamically update the console.log with a variable
var server = http.createServer(handleRequest);
server.listen(PORT, function() {

	console.log("Server listening on: http://localhost%s", PORT);
});