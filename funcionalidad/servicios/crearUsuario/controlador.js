const logicaDB = require('./logicaDB');

const crearUsuario = async(req, res) => {
    let crearUsuario =  req.body;
    try {
        let respuesta = await logicaDB.crearUsuarioDB(crearUsuario);
        res.status(200).json({
            'crearUsuario': respuesta
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
    crearUsuario,
}