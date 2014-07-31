var express = require('express');
var app = express();

// cross domain stuff
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

// routes
app.get('/jobs', function(req, res) {
    res.json(200, {
        message: 'Listing of jobs'
    });
});

// start server
var server = app.listen(3000, function() {
    console.log('Server running on port %d', server.address().port);
});