//Reforzando conceptos
function imprimir5veces5 (){
    for(let i=0;i<5;i++){
        console.log(5);
    }
}

//Pasito a pasito
function pasitoAPasito (){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}

//¡Hagamos una más!
function pasandoPorI (){
     for(let i=0;i<5;i++){
        console.log("acá i tiene el valor de "+i);
    }
}

//Par o no par, esa es la cuestión
function pasandoPorLosPares (){
     for(let i=0;i<=6;i++){
        if(i%2 == 0){
            console.log("acá i tiene el valor de "+i);
        }
    }
}

//Repetición variable
function imprimirAzul(cantidadDeVeces){
    for( let i = 0 ; i < cantidadDeVeces ; i++ ){ 
        console.log("Azul");
    }
}

//Acumuladores
function sumar5MonedasDe25Centavos(){
    let suma = 0; 

    for( let i = 0 ; i < 5 ; i++ ){ 
       suma = suma + 0.25; 
    }

    return suma;
}

//Acumulador variable
function sumarMonedasDe25(cantidadDeMonedas) {
    let monedas = 0;

    for( let i = 0 ; i < cantidadDeMonedas ; i++ ){ 
        monedas = monedas + 0.25;
    }

    return monedas; 
}

//Seguimos variando
function sumaDeLosParesDel0Al(x){
    let contador = 0;

    for( let i = 0 ; i <= x ; i++ ){ 
        if(i%2 == 0){
            contador = contador + i;
        }
    }

    return contador; 
}

//Sumatoria
function sumatoriaHasta(x){
    let contador = 0;

    for(let i=0;i<x;i++){
        contador = contador + i;
    }

    return contador;
}

//Usain Bolt te necesita
function caloriasDeTrote(vueltasACorrer){
    let calorias = 0;
    for(let i=1;i <= vueltasACorrer;i++){
        calXVuelta = 5*i;
        calorias = calorias + calXVuelta;
    }

    return calorias;
}