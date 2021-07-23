const { obtenerUsuario } = require('./controlador');
const RegistroForm = require('./registroForm.model')

const obtenerUsuarioDB = async() => {
    let respuesta = await obtenerUsuario.find();
    return respuesta;
}

/** Exportar consultas */
module.exports = {
    obtenerUsuarioDB,
}