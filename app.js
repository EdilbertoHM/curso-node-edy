 //const fs = require('fs');// funcion para escribir en un texto la vamos a borrar para global

 const { clear } = require('console');
 var colors = require('colors');

const { request } = require('http');

const {crearArchivo} = require('./base1node/multiplicar');
const argv = require('./config/yargs');


console.clear();


crearArchivo (argv.base,argv.l, argv.h)
    //  .then( nombreArchivo => console.log(nombreArchivo,'creado'))
    //  .catch(err => console.log(err));
          





























































//como hicimos la tabla sin sin sistemas de archivos apartes


//console.log('HOLA SI PUEDES');
//const base = 3;
//let salida = '';
//                for(let i=1; i<=10;i++){
 //                   salida += `${base} x ${i}= ${base*i}\n`;
 //               }
   //             console.log(salida);

//fs.writeFile(`tabla=${ base }`,salida,(err) => { // funcion para escribir textos 
 //   if (err) throw err;
  //  console.log(`Tabla -${base}.txt creado`);
//})
//fs.writeFileSync(`tabla=${ base }`,salida);

//console.log(`Tabla -${base}.txt creado`);