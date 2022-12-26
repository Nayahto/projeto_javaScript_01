const serviceMethods = require('../Service/annotactionService');

const padrao = (req, res) => {
  res.send('ola mundo');
};

const findAllAnnotation = async (req, res) => {
  const findAllparams = await serviceMethods.findAllAnnotation();

  if (findAllparams.length == 0) {
    return res.status(404).send({ message: 'nenhuma anotacao foi encontrada' });
  }
  res.send(findAllparams);
};

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

const createAnnotation = async (req, res) => {
  const createBody = req.body;
  const createdBody = await serviceMethods.createAnnotation(createBody);
  res.send({ message: 'anotacao criada' });
};

const findAndEditAnnotation = async (req, res) => {
  const findByIdEdit = req.params.id;
  const findAndEditBody = req.body;
  const foundAndEdited = await serviceMethods.findAndEditAnnotation(
    findByIdEdit,
    findAndEditBody,
    res.send('anotacao editada'),
  );
};

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
