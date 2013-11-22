var express = require('express'),
    app = express(),
    exphbs  = require('express3-handlebars');

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
