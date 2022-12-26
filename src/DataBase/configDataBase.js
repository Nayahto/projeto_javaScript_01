const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1:27017/annotation';

const dataBaseConection = () => {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongo conectado!!'))
    .catch((err) => {
      console.log(`erro encontrado: ${err}`);
    });
};

module.exports = dataBaseConection;
