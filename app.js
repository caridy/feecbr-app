/*global require,console*/

(function () {
    
    "use strict";
    
    var express = require('express'),
        exphbs = require('express3-handlebars'),
        app = express();

    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    
    app.get('/', function (request, response, next) {
        response.render('home');
    });
    
    app.get('/photos', function (request, response, next) {
        response.render('photos');
    });
    
    app.listen(3000, function () {
        console.log('app serving on port 3000');
    });
        
}());
