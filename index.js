require('dotenv').config();

const port = process.env.PORT || 3002;

const bp = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/Routes/routes');
const configDataBase = require('./src/DataBase/configDataBase');

configDataBase();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
});

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(routes);

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
