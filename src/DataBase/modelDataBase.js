//importe do mongoose para o mapeamento dos campos para o envio para o banco de dados//

const mongoose = require('mongoose');
//modelo do banco de dados que será solicitado pelas rotas quando algo for enviado//
const modelConnection = new mongoose.Schema({
  //campos para mapeamento incluindo seus nomes, tipos e se é necessario ou nao//
  title: { type: String, required: true },
  text: { type: String, required: true },
});
//configuracoes adicionais para o modelo do banco de dados//
const notationData = mongoose.model('anotations', modelConnection);
//esporte do modelo do banco//
module.exports = notationData;
