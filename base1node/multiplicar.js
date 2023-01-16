const fs = require('fs');// funcion para escribir en un texto 
var colors = require('colors/safe');
const crearArchivo = async(base = 5,listar =false,hasta= 10) => {
   
    let salida = '';
    for(let i=1; i<=hasta;i++){
        salida += `${base} x ${i}= ${base*i}\n`;
    }
    if(listar){
        console.log('======================='.rainbow);
        console.log('tabla del',colors.bgBlue(base));
        console.log('======================='.inverse);
        console.log(colors.rainbow(salida));
            }



fs.writeFileSync(`./base1node/salida/tabla=${ base }`,salida);//para agregar a la direccion que ocupo

console.log(`Tabla -${base}.txt creado`);



}
module.exports = {
    crearArchivo
}