const logicaDB = require('./logicaDB');

const obtenerUsuario = async(req, res) => {
    let obtenerUsuario =  req.body;
    try {
        let respuesta = await logicaDB.obtenerUsuario(obtenerUsuario);
        res.status(200).json({
            'obtenerUsuario': respuesta
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
    obtenerUsuario,
}