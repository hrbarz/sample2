var express = require('express');
var MongoStore = require('connect-mongo')(express);

server = express();
server.use(express.session({
    secret: 'secretblablabla',
    store: new MongoStore({
      db: 'sample2'
    }),
    maxAge: 1000*60*5
  }));

server.configure(function() {
    server.use(express.logger());
    server.use(express.methodOverride());
    server.use(express.static(config.staticPath));
    server.use(express.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({
        store: new MongoStore({
            db: config.db
        }),
        secret: config.salt
    }));
});