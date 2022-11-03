
import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';



const app = express();

//Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log('Error Base de datos no conectada'));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG;
app.set('view engine', 'pug');

//Obtener año actual
app.use( (req, res,next) => {
    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio= 'Agencia Viajes';
    return next();
});

//Agregar body parsen leer datos
app.use(express.urlencoded({extended: true}));

//Definir carpeta publica
app.use(express.static('public'));

//Agregrar router
app.use('/', router);



app.listen(port, () =>{
    console.log(`El servidor funciona en el puerto ${port}`)
});