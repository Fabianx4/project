const logicaDB = require('./logicaDB');

const crearEgreso = async(req, res) => {
    let crearEgreso =  req.body;
    try {
        let respuesta = await logicaDB.crearEgresoDB(crearEgreso);
        res.status(200).json({
            'crearEgreso': respuesta
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
    crearEgreso,
}