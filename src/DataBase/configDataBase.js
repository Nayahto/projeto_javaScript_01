const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/Notation';

const dataBaseConection = () => {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongo conectado'))
    .catch((err) => {
      console.log(`erro encontrado: ${err}`);
    });
};

module.exports = dataBaseConection;
