var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.bodyParser());

// cross domain stuff (CORS)
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
app.post('/contact', function(req, res) {
    var params = req.body;
    
    // do something with params (e.g. send email, save to database)
    
    res.json(200, {
        message: 'Thanks ' + params.name
    });
});

app.get('/jobs', function(req, res) {
    res.json(200, {
        message: 'Listing of jobs',
        jobs: [
            {
                title: 'Senior Software Engineer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Associate Software Engineer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]
    });
});

// start server
var server = app.listen(3000, function() {
    console.log('Server running on port %d', server.address().port);
});