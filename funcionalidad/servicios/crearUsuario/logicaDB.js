const CrearUsuario = require('./crearUsuario.model')

const crearUsuarioDB = async (crearUsuario) => {
    let respuesta = await CrearUsuario.create(crearUsuario);
    return respuesta;
}

/** Exportar consultas */
module.exports = {
    crearUsuarioDB,
}