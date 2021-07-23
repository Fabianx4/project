const logicaDB = require('./logicaDB');

const obtenerEgreso = async(req, res) => {
    let obtenerEgreso =  req.body;
    try {
        let respuesta = await logicaDB.obtenerEgresoDB(obtenerEgreso);
        res.status(200).json({
            'obtenerEgreso': respuesta
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
    obtenerEgreso,
}