const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroForm = new Schema({ 
    rut:String,
    id:String,
    nombre:String,
    apellido:String,
    correo:String,
    password:String,
    rut:String,
    id:String,
    nombre:String,
    apellido:String,
    correo:String,
    password:String,
});

module.exports = mongoose.model('RegistroForm',RegistroForm)