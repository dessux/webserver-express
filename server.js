const express = require('express');
const app = express(); // Permite usar express

const hbs = require('hbs');

require('./hbs/helpers'); // En el momento que se importan los helpers se ejecutan

const puerto = 3000; // Puerto para desarrollo

// Para acceso al puerto desde Heroku se agrega:
const port = process.env.PORT || puerto; // Si no asigna puerto Heroku se toma el que definimos para desarrollo en puerto

// Un middleware es un callback que se va a ejecutar siempre, sin importar que url se solicite
app.use(express.static(__dirname + '/public')); // Indica el folder que queremos servir o que será estático o sea público
// con el uso de __dirname se tomará la ruta completa donde se encuentra la app.

/*
app.get('/', function(req, res) {   // Solicitud get para un path '/'
    res.send('Hola Mundo');
})
*/

/*
// Con función =>  
app.get('/', (req, res) => { // Solicitud get para un path '/'
    console.log('Servidor levantado...')
        //res.send('Hola Mundo');

    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    };

    res.send(salida);
})

// Para accesar otro path
app.get('/data', (req, res) => { // Solicitud get para un path '/'

    res.send('Hola Data');
})
*/

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => { // Solicitud get para un path '/'
    res.render('home', { // renderizar con handlebars la página home.hbs. DEBE EXISTIR UNA CARPETA CON EL NOMBRE DE VIEWS
        nombre: 'feRnaNdO', // Se mandan los datos (nombre y anio) a recibir en el html
        //anio: new Date().getFullYear()    // Se hace ahora con un helper
    });
});

app.get('/about', (req, res) => { // Solicitud get para un path '/'
    res.render('about', { // renderizar con handlebars la página home.hbs. DEBE EXISTIR UNA CARPETA CON EL NOMBRE DE VIEWS
        //anio: new Date().getFullYear() // Se mandan los datos (nombre y anio) a recibir en el html. // Se hace ahora con un helper
    });
});


// app.listen r ecibiendo callback
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});