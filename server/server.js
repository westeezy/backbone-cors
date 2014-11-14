var express         = require('express');
var path            = require('path');
var passport        = require('passport');
var bodyParser      = require('body-parser');
var config          = require('./libs/config');
var log             = require('./libs/log')(module);
var oauth2          = require('./libs/oauth2');
var cors            = require('cors');
var app             = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.all('/oauth/token', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/api', passport.authenticate('bearer', { session: false }), function (req, res) {
    res.send('API is running');
});

app.get('/api/info', passport.authenticate('bearer', { session: false }), function(req, res) {
  var data = {"hey":"guy","anumber":243,"anobject":{"whoa":"nuts","anarray":[1,2,"thr<h1>ee"],"more":"stuff"},"awesome":true,"bogus":false,"meaning":null,"japanese":"明日がある。","link":"http://jsonview.com","notLink":"http://jsonview.com is great"};
  return res.send(data);
});

app.post('/oauth/token', oauth2.token);

app.get('/api/userInfo',
    passport.authenticate('bearer', { session: false }),
        function(req, res) {
            res.json({ user_id: req.user.userId, name: req.user.username, scope: req.authInfo.scope })
        }
);

app.use(express.static(path.join(__dirname, "public")));

require('./libs/auth');

app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.set('port', (process.env.PORT || 1337 ));
app.listen(app.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});
