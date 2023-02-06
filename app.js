const express = require('express');
const util = require('util');

const app = express();
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end(util.format("%s - %s\n", new Date(), 'Got Request'));
});

app.listen(process.env.PORT || 8080)