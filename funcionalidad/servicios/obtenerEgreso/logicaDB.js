const obtenerEgreso = require('./obtenerEgreso.model')

const obtenerEgresoDB = async() => {
    let respuesta = await RegistroForm.find();
    return respuesta;
}

/** Exportar consultas */
module.exports = {
    obtenerEgresoDB,
}