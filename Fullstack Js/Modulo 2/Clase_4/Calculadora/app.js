const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

console.log(sumar(1,1));
console.log(restar(1,1));
console.log(multiplicar(1,1));
console.log(dividir(1,1));

function dominio (str){
    return `http://www.${str}`; 
}

console.log(dominio("digitalhouse.com.ar"));