const hbs = require('hbs'); // helpers

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    //console.log('palabras: ', palabras);
    palabras.forEach((palabra, idx) => {
        // Convierte la primera letra (índice 0) a mayúscula y a partir de la 2da. pos. (índice 1) en minúsculas
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});