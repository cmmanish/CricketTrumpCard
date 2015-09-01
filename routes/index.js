var express = require('express'),
    router = express.Router();
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('./database/CRICKET.db');

exports.getPlayers = function (req, res) {

    db.all("select * from PLAYER where country = 'WI' ", function (err, row) {
        if (err !== null) {
            res.send(500, "An error has occurred -- " + err);
        }
        else {
            res.render('pages/index', {players: row});
        }
    });
}