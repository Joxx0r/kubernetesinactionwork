
const http = require("http");
const https = require("https");

const os = require("os");
console.log("Kubia server starting...");
var handler = function(request, response) {
console.log("Received request from " + request.connection.remoteAddress);
response.writeHead(200);
response.end("You’ve hit " + os.hostname() + "\n");
};

var httpWww = http.createServer(handler);
httpWww.listen(8080);

var httpsWww = https.createServer(handler);
httpsWww.listen(8443);

