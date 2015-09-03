var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes'),       // by default, brings in routes/index.js
    port = process.env.PORT || 4000,
    router = express.Router(),
    host = process.env.HOST || "127.0.0.1";

app.use(express.bodyParser());

app.configure(function () {// set the view engine to ejs
    app.set('view engine', 'ejs');
});

app.get('/', routes.getInstaGateHome);

app.get('/auth', routes.handleAuth);

app.get('/redirect', routes.handleRedirect);

// Starts the server itself
app.listen(port, function (req, res) {
    console.log('http://127.0.0.1:' + port + '/');
});