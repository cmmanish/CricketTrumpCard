var express = require('express'),
    router = express.Router();
sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('./database/CRICKET.db');

exports.getTopPlayers = function (req, res) {

    db.all("select * from PLAYER where tests > 20 and runs > 5000 ", function (err, row) {
        if (err !== null) {
            res.send(500, "An error has occurred -- " + err);
        }
        else {
            res.render('pages/index', {players: row});
        }
    });
}

exports.getPlayerForCountry = function (req, res) {

    var country = req.params.id;
    var query = "select * from PLAYER where country = " + " '" + country + "' ORDER BY runs DESC ";
    db.all(query, function (err, row) {
        if (err !== null) {
            res.send(500, "An error has occurred -- " + err);
        }
        else {
            res.render('pages/index', {players: row});
        }
    });
}

exports.getPlayerWithBatAvg = function (req, res) {

    var bat_avg = req.params.id;
    var query = "select * from PLAYER where tests > 20 and bat_avg > " + " '" + bat_avg + "' ORDER BY runs DESC ";
    db.all(query, function (err, row) {
        if (err !== null) {
            res.send(500, "An error has occurred -- " + err);
        }
        else {
            res.render('pages/index', {players: row});
        }
    });
}