var express = require('express'),
    expyui = require('express-yui'),
    expview = require('express-view'),
    locator = require('./locator.js'),
    librouter = require('feecbr-lib').router,
    libapp = require('feecbr-lib').application,
    app = express();

app.set('app port', 3000);
app.set('layout', 'main');

// express extension
libapp.extend(app);
librouter.extend(app);
locator.extend(app);
expview.extend(app);
expyui.extend(app);

app.expose({}, 'DATA');

// express middlewares
app.use(librouter.expose());

app.yui.ready(function(err) {

    if (err) {
        console.error('we are screwed!');
        console.log(err);
        console.log(err.stack);
        return;
    }

    // getting all modules provisioned for the server side
    app.yui.use('feecbr-app');

    // default pages
    app.page('photo', '/photos');
    app.page('home', '/');

    app.listen(3000, function () {
        console.log('app serving on port 3000');
    });

});
