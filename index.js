const express = require('express');
const port = process.env.PORT || 3002;
const app = express();
const cors = require('cors');
const routes = require('./src/Routes/routes');
const configDataBase = require('./src/DataBase/configDataBase');

configDataBase();

app.use(routes);
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
