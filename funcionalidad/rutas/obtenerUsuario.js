const express = require('express');
const router = express.Router();
const controlador = require('../servicios/obtenerUsuario/controlador');

router.post('/usuario/obtener-usuarios', controlador.obtenerUsuario);

module.exports = router;