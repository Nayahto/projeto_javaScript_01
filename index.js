//importe e configuracao das variaveis de ambiente//
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

const port = process.env.PORT || 3002;
//importe de todos os arquivos necessarios incluindo banco de dados, rotas, cors e etc//
const bp = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/Routes/routes');
const configDataBase = require('./src/DataBase/configDataBase');

configDataBase();
//configuracao do cors (Cross-Origin-Resource-Sharing) para o acesso da rotas por terceiros//
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
});
//configuracao do body parser//
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
//conifguracao necessaria para o funcionamento das rotas//
app.use(routes);
//configuracao restante para fazer a aplicacao entrar no ar//
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
