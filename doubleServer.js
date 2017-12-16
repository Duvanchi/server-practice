var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function goodRequest(request, response) {
	response.end("You're a good baby");
}

function badRequest(request, response) {
	response.end("You're a bad baby");
}

var server = http.createServer(goodRequest)
server.listen(PORT1, function() {
	console.log("Server listening on: http://localhost%s", PORT1)
});

var server = http.createServer(badRequest)
server.listen(PORT2, function() {
	console.log("Server listening on: http://localhost%s", PORT2)
});