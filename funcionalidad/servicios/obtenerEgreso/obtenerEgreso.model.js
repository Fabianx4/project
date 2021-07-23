const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroForm = new Schema({ 
        egresos:String,
        id_usuario:String,
        rut:String,
        id:String,
        nombre:String,
        apellido:String,
        correo:String,
        password:String,
        id:String,
        descripcion:String,
        precio:String,
});

module.exports = mongoose.model('RegistroForm',RegistroForm)