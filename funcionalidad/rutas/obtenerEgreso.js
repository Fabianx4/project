const express = require('express');
const router = express.Router();
const controlador = require('../servicios/obtenerEgreso/controlador');

router.post('/egreso/obtener-egresos', controlador.obtenerEgreso);

module.exports = router;