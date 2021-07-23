const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Conectado a la DB")
});

const registroForm = require('./funcionalidad/rutas/crearUsuario');

router.use('/usuario/crear-usuario', crearUsuario);

const registroForm = require('./funcionalidad/rutas/crearEgreso');

router.use('/egreso/crear-egreso', crearEgreso);

const registroForm = require('./funcionalidad/rutas/obtenerUsuario');

router.use('/usuario/obtener-usuarios', obtenerUsuario);

const registroForm = require('./funcionalidad/rutas/obtenerEgreso');

router.use('/egreso/obtener-egresos', obtenerEgreso);

const registroForm = require('./funcionalidad/rutas/obtenerEgresoUsuario');

router.use('//egreso/obtener-egresos-usuario/:id', obtenerEgresoUsuario);

const { crearUsuario } = require('./funcionalidad/servicios/crearUsuario/controlador');
const { obtenerUsuario } = require('./funcionalidad/servicios/obtenerUsuario/controlador');
const { crearEgreso } = require('./funcionalidad/servicios/crearEgreso/controlador');
const { obtenerEgreso } = require('./funcionalidad/servicios/obtenerEgreso/controlador');
const { obtenerEgresoUsuario } = require('./funcionalidad/servicios/obtenerEgresoUsuario/controlador');

router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/backend-doscampos', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})