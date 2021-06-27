const http = require('http');
const handleRequest= require('./app');

http.createServer(handleRequest).listen(8080, console.log('server is running on your port'));
