const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();
    
  // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES
    app.use(bodyParser.json());
  
    app.get('/', function(req, res) {
      res.send('funciona heroku')
    })

    require('../api/routes/customerWallets')(app);

    return app;
  };