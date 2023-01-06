//importes necessarios para o funcionamento das rotas junto com suas funcoes intermediarias e controladores//
//router: objeto criado para mapeamento das rotas//
const router = require('express').Router();
//controladores//
const Controller = require('../Controllers/annotationController');
//funcoes intermediarias//
const { validId, validObjectBody } = require('../middlewares/middlewares');

//parte responsavel por criar todas as rotas//
//rota base//
router.get('/', Controller.padrao);
//rota geral para todos os indices//
router.get('/todos', Controller.findAllAnnotation);
//rota responsavel por um indice especifico baseado em seu identificador//
router.get('/todos/:id', validId, Controller.findAnnotationById);
//rota para a criacao de novos itens//
router.post('/criar', validObjectBody, Controller.createAnnotation);
//rota responsavel pela edicao de um item especifico baseado em seu identificador//
router.put(
  '/editar/:id',
  validId,
  validObjectBody,
  Controller.findAndEditAnnotation,
);
//rota para a delecao do item baseado em seu identificador//
router.delete('/apagar/:id', validId, Controller.findAndDeleteAnnotation);

module.exports = router;
