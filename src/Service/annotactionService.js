//importe do mongoose contendo o modelo do banco de dados ja mapeado//
const modelMongoose = require('../DataBase/modelDataBase');
//servico para encontrar todos os indices//
const findAllAnnotation = async () => {
  const findAnnotations = await modelMongoose.find();
  return findAnnotations;
};
//servico para encontar um unico indeice baseado em seu identificador//
const findAnnotationById = async (id) => {
  const findIdAnnotation = await modelMongoose.findById(id);
  return findIdAnnotation;
};
//servico para a criacao de um novo indice//
const createAnnotation = async (body) => {
  const annotationCreate = await modelMongoose.create(body);
  return annotationCreate;
};
//servico para a edicao do indice baseado em seu identificador//
const findAndEditAnnotation = async (id, body) => {
  const editAnnotation = await modelMongoose.findByIdAndUpdate(id, body);
  return editAnnotation;
};
//servico para a delecao do indice baseado em seu identificador//
const findAndDeleteAnnotation = async (id) => {
  const deleteAnnotation = await modelMongoose.findByIdAndDelete(id);
  return deleteAnnotation;
};

module.exports = {
  findAllAnnotation,
  findAnnotationById,
  createAnnotation,
  findAndEditAnnotation,
  findAndDeleteAnnotation,
};
