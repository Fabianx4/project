const mongoose = require('mongoose');
const { Schema } = mongoose;

const CrearUsuario = new Schema({ 
    nombre:String,
    apellido:String,
    rut:String,
    correo: String,
    password: String,
});

module.exports = mongoose.model('CrearUsuario',CrearUsuario)