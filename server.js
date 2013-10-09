var express = require('express'), app = express.createServer();
var jade = require('jade');
var io = require('socket.io').listen(app);
app.set('views', __direname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout : false });
app.configure(function(){
	app.use(express.static(__direname + '/public'));
});
app.get('/', function(req, res){
	res.render('home.jade');
});
app.listen(3000);
