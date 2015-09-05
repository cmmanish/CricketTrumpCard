var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes'),       // by default, brings in routes/index.js
    port = process.env.PORT || 4002,
    router = express.Router(),
    host = process.env.HOST || "127.0.0.1";
var httpSyncGet = require('./rest/httpSyncGET.js');
var httpAsyncGet = require('./rest/httpAsyncGET.js');
var httpRequestify = require('./rest/httpRequestify.js');

app.use(express.bodyParser());

app.configure(function () {// set the view engine to ejs
    app.set('view engine', 'ejs');
});

// index page
app.get('/', routes.getInstaGateHome);

//app.get('/auth', function (req, res) {
//
//    console.log('Going to call GET  /auth');
//    res.render('pages/auth', httpSyncGet.getAuthenticated);
//
//});

app.get('/redirect', routes.handleRedirect);

app.listen(port, function (req, res) {
    console.log('Visit http://' + host + ':' + port + ' is where magic happen ');
});