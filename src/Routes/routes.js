const router = require('express').Router();
const Controller = require('../Controllers/annotationController');
const { validId, validObjectBody } = require('../middlewares/middlewares');

router.get('/', Controller.padrao);
router.get('/todos', Controller.findAllAnnotation);
router.get('/todos/:id', validId, Controller.findAnnotationById);
router.post('/criar', validObjectBody, Controller.createAnnotation);
router.put(
  '/editar/:id',
  validId,
  validObjectBody,
  Controller.findAndEditAnnotation,
);
router.delete('/apagar/:id', validId, Controller.findAndDeleteAnnotation);

module.exports = router;
