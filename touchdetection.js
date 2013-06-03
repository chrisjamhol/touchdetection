  //setting up static paths
var path = require("path");
var __publicPaths = {
    publicPathViews : path.join(__dirname, 'public/views/'),
    publicPathScripts : path.join(__dirname, 'public/scripts/'),
    publicPathStyles : path.join(__dirname, 'public/styles/'),
    publicPathSockets : path.join(__dirname, 'public/scripts/websockets/'),
    publicImagePath : path.join(__dirname, 'public/images/')
}

var __modelsPath = path.join(__dirname, 'models/');
  //create express server + socked.io connection
var express = require('express')
    ,app = express()
    ,http = require('http')
    ,server = http.createServer(app)
    ,io = require('socket.io').listen(server);
    server.listen(80);
    console.log("Server started on :80");
  //config express server
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(app.router);
app.use(express.compress());
app.use(express.static(__publicPaths.publicPathViews));
app.set('views', __publicPaths.publicPathViews);
app.set('view engine','ejs');
app.set('view options',{open:"<%",close:"%>"});


//-----routes--------

app.get('/',function(req,res){
    res.render('index');
});

//piping css and js
app.get('/public/scripts/:scriptName',function(req,res){res.sendfile(__publicPaths.publicPathScripts+req.params['scriptName']);});
app.get('/public/styles/:styleName',function(req,res){res.sendfile(__publicPaths.publicPathStyles+req.params['styleName']);});
app.get('/public/sockets/:socketName',function(req,res){res.sendfile(__publicPaths.publicPathSockets+req.params['socketName']);});
app.get('/public/images/:imageName',function(req,res){res.sendfile(__publicPaths.publicImagePath+req.params['imageName']);});


//setting up websockeds
io.set('log level', 1); //no debug messages
io.sockets.on('connection', function (socket) {

});