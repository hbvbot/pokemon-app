const router = require('express').Router();
const controller = require('./controller');

router.route('/getpokemon').post(controller.getPokemon);

router.route('/getevolution').post(controller.getEvolution);

module.exports = router;
