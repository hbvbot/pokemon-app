const router = require('express').Router();
const controller = require('./controller');

router.route('/getpokemon').post(controller.getPokemon);

module.exports = router;
