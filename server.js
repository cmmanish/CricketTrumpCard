var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes'),       // by default, brings in routes/index.js
    port = process.env.PORT || 3000,
    router = express.Router(),
    host = process.env.HOST || "127.0.0.1";

app.use(express.bodyParser());

app.configure(function () {// set the view engine to ejs
    app.set('view engine', 'ejs');
});

app.get('/', routes.getTopPlayers);

app.get('/get/country/:id', routes.getPlayerForCountry);

app.get('/get/bat_avg/:id', routes.getPlayerWithBatAvg);

// Starts the server itself
app.listen(port);
console.log('3000 is the magic port');