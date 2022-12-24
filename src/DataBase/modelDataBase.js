const mongoose = require('mongoose');

const modelConcetion = new mongoose.Schema({
  tittle: { type: String, required: true },
  text: { type: String, required: true },
});

const notationData = mongoose.model('notation', modelConcetion);

module.exports = notationData;
