'user strict'

var express = require('express');
var routes = require('./server/routes');


var app = express();

app = routes.apply(app);

var routesPath = __dirname + '/server/routes'

app.use(express.static(__dirname + '/client'));


app.get('/test', function(req, res) {
    res.jsonp({
        tb_server: 'There you go'
    });
});


var port = 3000;
console.log('Express app started on port ' + port);
app.listen(port);
module.exports = app;