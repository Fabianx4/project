const ObtenerEgresoUsuario = require('./obtenerEgresoUsuario.model')

const obtenerRegistroFormDB = async() => {
    let respuesta = await ObtenerEgresoUsuario.find();
    return respuesta;
}

/** Exportar consultas */
module.exports = {
    obtenerRegistroFormDB,
}