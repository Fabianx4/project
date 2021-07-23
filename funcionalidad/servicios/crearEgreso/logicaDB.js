const { crearEgreso } = require('./controlador');
const CrearRegistro = require('./crearEgreso.model')

const crearEgresoDB = async (crearEgreso) => {
    let respuesta = await crearEgreso.create(crearEgreso);
    return respuesta;
}


/** Exportar consultas */
module.exports = {
    crearEgresoDB,
}