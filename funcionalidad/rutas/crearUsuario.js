const express = require('express');
const router = express.Router();
const controlador = require('../servicios/crearUsuario/controlador');

router.post('/usuario/crear-usuario', controlador.crearUsuario);

module.exports = router;