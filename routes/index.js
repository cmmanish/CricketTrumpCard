var request = require('request');
var express = require('express'),
    router = express.Router();

var INSTAGRAM_URL = 'https://api.instagram.com/oauth/access_token'
var CLIENT_ID = 'a60a41e5bc3d440e9ddb6f50160df41b'
var CLIENT_SECRET = '4ee366e72df84bd4be5765691ab53f04'
var REDIRECT_URL = 'http://localhost:4002/redirect'
var JSONoutput = ''
exports.getInstaGateHome = function (req, res) {

    res.render('pages/index');

};

exports.handleRedirect = function (req, res) {

    var CODE = req.query.code
    var full_name, username = ''
    console.log('code: ', CODE);
    console.log('Going to POST the Code');
    request({
        url: INSTAGRAM_URL, //INSTAGRAM_URL to hit
        method: 'POST',
        form: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URL,
            code: CODE
        }
    }, function (error, response, body) {
        if (error || response.statusCode != 200) {
            console.log(error);
        } else {
            JSONoutput = JSON.parse(body.toString());
            username = JSONoutput.user.username
            full_name = JSONoutput.user.full_name

            res.render('pages/redirect', {
                full_name: full_name,
                access_token: JSONoutput.access_token
            });
        }
    });

};

//exports.handleAuth = function (req, res, err) {
//
//
//        httpGetAuth.getAuthenticated();
//};
