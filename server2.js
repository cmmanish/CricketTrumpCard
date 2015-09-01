// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
    var players = [
            {
                "country": "IND",
                "playerName": "Mohammed Shami",
                "notOuts": "6",
                "highestScore": "51",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/7909\/",
                "strikeRate": "60.58",
                "tests": "12",
                "sixes": "3",
                "innings": "19",
                "batAvg": "12.77",
                "fifties": "1",
                "hundreds": "0",
                "id": "7909",
                "fours": "21",
                "runs": "166"
            },
            {
                "country": "IND",
                "playerName": "Bhuvneshwar Kumar",
                "notOuts": "3",
                "highestScore": "63",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1726\/",
                "strikeRate": "46.62",
                "tests": "12",
                "sixes": "0",
                "innings": "18",
                "batAvg": "26.2",
                "fifties": "3",
                "hundreds": "0",
                "id": "1726",
                "fours": "59",
                "runs": "393"
            },
            {
                "country": "IND",
                "playerName": "Umesh Yadav",
                "notOuts": "7",
                "highestScore": "30",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1858\/",
                "strikeRate": "43.15",
                "tests": "15",
                "sixes": "3",
                "innings": "17",
                "batAvg": "8.50",
                "fifties": "0",
                "hundreds": "0",
                "id": "1858",
                "fours": "10",
                "runs": "85"
            },
            {
                "country": "IND",
                "playerName": "Ravichandran Ashwin",
                "notOuts": "9",
                "highestScore": "124",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1593\/",
                "strikeRate": "62.35",
                "tests": "28",
                "sixes": "9",
                "innings": "41",
                "batAvg": "32.50",
                "fifties": "4",
                "hundreds": "2",
                "id": "1593",
                "fours": "118",
                "runs": "1040"
            },
            {
                "country": "IND",
                "playerName": "Amit Mishra",
                "notOuts": "2",
                "highestScore": "84",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1454\/",
                "strikeRate": "56.23",
                "tests": "16",
                "sixes": "2",
                "innings": "23",
                "batAvg": "21.48",
                "fifties": "2",
                "hundreds": "0",
                "id": "1454",
                "fours": "58",
                "runs": "451"
            },
            {
                "country": "IND",
                "playerName": "Wriddhiman Saha",
                "notOuts": "1",
                "highestScore": "60",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1465\/",
                "strikeRate": "41.95",
                "tests": "7",
                "sixes": "3",
                "innings": "13",
                "batAvg": "23.67",
                "fifties": "2",
                "hundreds": "0",
                "id": "1465",
                "fours": "25",
                "runs": "284"
            },
            {
                "country": "IND",
                "playerName": "Murali Vijay",
                "notOuts": "0",
                "highestScore": "167",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1597\/",
                "strikeRate": "47.35",
                "tests": "33",
                "sixes": "20",
                "innings": "58",
                "batAvg": "41.72",
                "fifties": "11",
                "hundreds": "6",
                "id": "1597",
                "fours": "295",
                "runs": "2420"
            },
            {
                "country": "IND",
                "playerName": "Shikhar Dhawan",
                "notOuts": "0",
                "highestScore": "187",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1446\/",
                "strikeRate": "64.23",
                "tests": "15",
                "sixes": "4",
                "innings": "26",
                "batAvg": "44.54",
                "fifties": "2",
                "hundreds": "4",
                "id": "1446",
                "fours": "153",
                "runs": "1158"
            },
            {
                "country": "IND",
                "playerName": "Lokesh Rahul",
                "notOuts": "0",
                "highestScore": "110",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/8733\/",
                "strikeRate": "47.83",
                "tests": "5",
                "sixes": "2",
                "innings": "9",
                "batAvg": "28.22",
                "fifties": "0",
                "hundreds": "2",
                "id": "8733",
                "fours": "29",
                "runs": "254"
            },
            {
                "country": "IND",
                "playerName": "Cheteshwar Pujara",
                "notOuts": "5",
                "highestScore": "206",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1448\/",
                "strikeRate": "49.21",
                "tests": "28",
                "sixes": "3",
                "innings": "49",
                "batAvg": "47.55",
                "fifties": "6",
                "hundreds": "6",
                "id": "1448",
                "fours": "261",
                "runs": "2092"
            },
            {
                "country": "IND",
                "playerName": "Virat Kohli",
                "notOuts": "5",
                "highestScore": "169",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1413\/",
                "strikeRate": "53.45",
                "tests": "37",
                "sixes": "9",
                "innings": "65",
                "batAvg": "46.15",
                "fifties": "11",
                "hundreds": "11",
                "id": "1413",
                "fours": "324",
                "runs": "2769"
            },
            {
                "country": "IND",
                "playerName": "Ajinkya Rahane",
                "notOuts": "3",
                "highestScore": "147",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1447\/",
                "strikeRate": "56.59",
                "tests": "18",
                "sixes": "4",
                "innings": "33",
                "batAvg": "44.97",
                "fifties": "7",
                "hundreds": "4",
                "id": "1447",
                "fours": "175",
                "runs": "1349"
            },
            {
                "country": "IND",
                "playerName": "Stuart Binny",
                "notOuts": "1",
                "highestScore": "78",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/1530\/",
                "strikeRate": "53.70",
                "tests": "5",
                "sixes": "1",
                "innings": "8",
                "batAvg": "20.71",
                "fifties": "1",
                "hundreds": "0",
                "id": "1530",
                "fours": "16",
                "runs": "145"
            },
            {
                "country": "IND",
                "playerName": "Rohit Sharma",
                "notOuts": "2",
                "highestScore": "177",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/576\/",
                "strikeRate": "52.20",
                "tests": "14",
                "sixes": "14",
                "innings": "23",
                "batAvg": "37.81",
                "fifties": "3",
                "hundreds": "2",
                "id": "576",
                "fours": "81",
                "runs": "794"
            },
            {
                "country": "IND",
                "playerName": "Ishant Sharma",
                "notOuts": "35",
                "highestScore": "31",
                "cbURL": "http:\/\/www.cricbuzz.com\/profiles\/702\/",
                "strikeRate": "28.56",
                "tests": "65",
                "sixes": "0",
                "innings": "95",
                "batAvg": "9.03",
                "fifties": "0",
                "hundreds": "0",
                "id": "702",
                "fours": "60",
                "runs": "542"
            }
        ]
    ;
    res.render('pages/index', {
        players: players
    });

});

app.listen(3002);
console.log('3002 is the magic port');