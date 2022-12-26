const modelMongoose = require('../DataBase/modelDataBase');

const findAllAnnotation = async () => {
  const findAnnotations = await modelMongoose.find();
  return findAnnotations;
};

const findAnnotationById = async (id) => {
  const findIdAnnotation = await modelMongoose.findById(id);
  return findIdAnnotation;
};

const createAnnotation = async (body) => {
  const annotationCreate = await modelMongoose.create(body);
  return annotationCreate;
};

const findAndEditAnnotation = async (id, body) => {
  const editAnnotation = await modelMongoose.findByIdAndUpdate(id, body);
  return editAnnotation;
};

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
