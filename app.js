var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('hey, this works!');
});

app.listen(3000, function () {
    console.log('app serving on port 3000');
});
