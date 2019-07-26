// WEBSERVER


// Este código se puede hacer con un paquete de terceros Express que facilita la
// codificación para http

// Servidor http propio de node

const http = require('http');
let puerto = 8080;

// Crear el servidor
http.createServer((req, res) => {

        // Respuesta en JSON como un servicio
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            url: req.url
        }

        // En formato JSON
        res.write(JSON.stringify(salida));

        // Respuesta HTML en página web
        res.write('Hola Mundo');
        res.end(); // avisar que se terminó de crear la respuesta
    })
    .listen(puerto); // Puerto que va a estar escuchando


console.log(`Escuchando el puerto ${ puerto }`);