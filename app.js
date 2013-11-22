var express = require('express'),
    exphbs = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (request, response, next) {
    response.render('home');
});

app.get('/photos', function (request, response, next) {
    response.render('photos', {
        count: 3,
        photos: [{
            "from": "FEEC images",
            "title": "Workshop",
            "src": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/q75/s720x720/1472977_633433723380215_434696798_n.jpg",
            "link": "http://feecbr.com.br/pt"
        }, {
            "from": "yahoo images",
            "title": "photo two",
            "src": "http://www.exit-brasil.org/foto/logo.jpg",
            "link": "http://yahoo.com"
        }, {
            "from": "google images",
            "title": "photo three",
            "src": "http://www.exit-brasil.org/foto/logo.jpg",
            "link": "http://google.com"
        }]
    });
});

app.listen(3000, function () {
    console.log('app serving on port 3000');
});
