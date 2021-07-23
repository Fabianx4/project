const logicaDB = require('./logicaDB');

const obtenerEgresoUsuario = async(req, res) => {
    let obtenerEgresoUsuario =  req.body;
    try {
        let respuesta = await logicaDB.obtenerEgresoUsuarioDB(obtenerEgresoUsuario);
        res.status(200).json({
            'obtenerEgresoUsuario': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

module.exports = {
    obtenerEgresoUsuario,
}