const express = require('express');
const router = express.Router();
const controlador = require('../servicios/obtenerEgresoUsuario/controlador');

router.post('/egreso/obtener-egresos-usuario/:id', controlador.obtenerEgresoUsuario);

module.exports = router;