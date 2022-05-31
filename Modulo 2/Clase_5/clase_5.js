let printcasa = function pepe(){
    console.log("pepe");
}

//arrow function
let suma = (numero1,numero2) => numero1 + numero2;

console.log(suma(1,2));

let tengoQueTrabajar = dia => {
    if(dia == "Sabado" || dia == "Domingo"){
        return false;
    }

    return true;
}

console.log(tengoQueTrabajar("Lunes"));

function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for(let i=0;i<=numero;i++){
        contador += (i%2 == 1 ? 1 : 0);
    }

    return contador;
}

console.log(noParesDeContarImparesHasta(4));