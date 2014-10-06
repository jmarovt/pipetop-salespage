var express = require('express')
  ,	ejs = 	require('ejs')
  , compress = require('compression');
	
ejs.open 	= 	'{{'; 
ejs.close 	= 	'}}';

var oneDay 	= 	86400000;
var IPADDRESS = process.env.IP || '127.0.0.1';

server 	= 	express();
server.use(compress());

server.set('port', process.env.PORT || 8080);
server.set("view options", {layout: false});  //This one does the trick for rendering static html
server.engine('html', require('ejs').renderFile); 
server.set('view engine', 'html');
server.set('views', __dirname + "/www");
server.use('/static', express.static(__dirname + '/www/static'));

server.get("*", function(req, res, next) {
	var request = req.params[0];
	if((request === "/")||(request === "")) {
		request = "/index.html";
	}
	if((request.substr(0, 1) === "/") && (request.substr(request.length - 4) === "html")) {
		request = request.substr(1);
		res.render(request);
	} else {
		next();
	}
});

server.listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});