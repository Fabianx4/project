const express = require('express');
const router = express.Router();
const controlador = require('../servicios/crearEgreso/controlador');

router.post('/egreso/crear-egreso', controlador.crearEgreso);

module.exports = router;