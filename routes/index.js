var express = require('express'),
    router = express.Router();
var httpGetAuth = require('../rest/httpSyncGet.js')

exports.getInstaGateHome = function (req, res, err) {

    if (err !== null) {
        res.send(500, "An error has occurred -- " + err);
    }
    else {
        res.render('pages/index');
    }
};

exports.handleAuth = function (req, res, err) {

    if (err !== null) {
        console.log(err);
        res.send(500, "An error has occurred -- " + err);
    }
    else {
        httpGetAuth.getAuthenticated();
    }
};

exports.handleRedirect = function (err, req, res) {

    if (err !== null) {
        console.log(err);
        res.send(500, "An error has occurred -- " + err);
    }
    else {
        console.log(req.query.code);
    }
};