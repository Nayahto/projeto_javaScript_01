const router = require('express').Router();
const Controller = require('../Controllers/notationController');

router.get('/', Controller.padrao);

module.exports = router;
