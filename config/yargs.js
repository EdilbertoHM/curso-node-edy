var colors = require('colors');
const argv =require('yargs')
.option('b', {
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'.underline.red
  
  

})
.option('l', {
alias:'listar',
type:'boolean',
default: false,
describe:'Muestra la tabla en consola'.underline.bgMagenta

})
.option('h', {
  alias:'hasta',
  type:'number',
  demandOption: true,
  default: 10,
  describe:'Este es el numero hasta donde quieres la tabla'.underline.red



})
.check((argv, options) => {
      if( isNaN(argv.b)){
        throw  'La base tiene que ser numero'
      }
      return true;
})
.argv;

module.exports = argv;