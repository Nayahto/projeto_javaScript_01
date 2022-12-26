const mongoose = require('mongoose');

const modelConnection = new mongoose.Schema({
  tittle: { type: String, required: true },
  text: { type: String, required: true },
});

const notationData = mongoose.model('annotations', modelConnection);

module.exports = notationData;
