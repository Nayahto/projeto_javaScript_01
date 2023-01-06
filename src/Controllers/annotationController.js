//importe do service contendo os dados necessarios em suas promisses//
const serviceMethods = require('../Service/annotactionService');
//controlador para a rota padrao//
const padrao = (req, res) => {
  res.send('ola mundo');
};

/*controlador baseado em todos os indices do banco de dados.
contendo tabmem uma breve verificacao de quantos itens possuem esse controlador
*/
const findAllAnnotation = async (req, res) => {
  const findAllparams = await serviceMethods.findAllAnnotation();

  if (findAllparams.length == 0) {
    return res.status(404).send({ message: 'nenhuma anotacao foi encontrada' });
  }
  res.send(findAllparams);
};
/*controlador para encontrar um indice especifico baseado no seu identificador.
contendo tambem uma pequena verificacao de identificador
*/
const findAnnotationById = async (req, res) => {
  const findByIdParams = req.params.id;
  const foundByIdParams = await serviceMethods.findAnnotationById(
    findByIdParams,
  );
  if (!foundByIdParams) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }
  res.send(foundByIdParams);
};
/*controlador para criacao de um novo indice.
 */
const createAnnotation = async (req, res) => {
  const createBody = req.body;
  const createdBody = await serviceMethods.createAnnotation(createBody);
  res.send({ message: 'anotacao criada' });
};
/*controlador para edicao de itens.
 */
const findAndEditAnnotation = async (req, res) => {
  const findByIdEdit = req.params.id;
  const findAndEditBody = req.body;
  const foundAndEdited = await serviceMethods.findAndEditAnnotation(
    findByIdEdit,
    findAndEditBody,
    res.send('anotacao editada'),
  );
};
/*controlador para a delecao de itens */
const findAndDeleteAnnotation = async (req, res) => {
  const findAndDeleteId = req.params.id;
  const foundAndDeleted =
    serviceMethods.findAndDeleteAnnotation(findAndDeleteId);
  res.send('anotacao apagada');
};

module.exports = {
  padrao,
  findAllAnnotation,
  findAnnotationById,
  createAnnotation,
  findAndEditAnnotation,
  findAndDeleteAnnotation,
};
