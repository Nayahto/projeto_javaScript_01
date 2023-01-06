//importe do mongoose para o mapeamento dos campos para o envio para o banco de dados//
const mongoose = require('mongoose');
/*funcoes que funcionaram como intermediarias entre requisicoes e respostas
cada umas dessas funcoes funcionam como um tipo de autentificacao para cada uma das rotas requisitadas
*/
//funcao para validadcao de indices encontrados//
const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next();
};
//funcao para validacao dos campos enviados para p banco de dados como uma forma de previnir qualquer erro//
const validObjectBody = (req, res, next) => {
  const personagem = req.body;
  if (!personagem.title || !personagem.text) {
    return res.status(400).send({ message: 'Preencha todos os campos!' });
  }
  next();
};
//exporte de cada umas das funcoes intermediarias criadas//
module.exports = {
  validId,
  validObjectBody,
};
