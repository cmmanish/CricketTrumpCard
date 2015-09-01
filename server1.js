var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    //router = express.Router(),
    sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database/CRICKET.db');

app.configure(function () {// set the view engine to ejs
    app.set('view engine', 'ejs');
});

app.get('/i', function (req, res) {
    res.sendFile('index.html');
});

app.get('/', function (req, res) {

    db.all(" select * from PLAYER where country = 'IND' ", function (err, row) {
        if (err !== null) {
            console.log(err);
            res.send(500, "An error has occurred -- " + err);
        }
        else {
            res.render('pages/index', {players: row});
        }
    });
});

// Starts the server itself
app.listen(port);
console.log('3001 is the magic port');