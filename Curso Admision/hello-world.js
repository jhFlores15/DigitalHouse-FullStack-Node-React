function medallaSegunPuesto(puesto){
    let array = ["Oro","Plata","Bronce","Seguí participando"];

    for(let i=0; i < array.length;i++){
        if(puesto > array.length -1){
            return array[array.length -1];
        }
        else{
            return array[puesto-1];
        }
    }
}

function productoria(array){
    let producto = 1;
    for(let i=0;i<array.length;i++){
        console.log(producto);
        producto = producto * array[i];
    }

    return producto;
}

function masMenos(array){   
    let positivos=0;
    let negativos=0;
    let ceros=0; 

    let length = array.length;
    for(let i=0;i<length;i++){
        if(array[i] > 0){
            positivos++;
        }else if(array[i] < 0){
            negativos++;
        }
        else{
            ceros++;
        }
    }

    return [calP(positivos,length),calP(ceros,length),calP(negativos,length)];
}

function calP(cantidad,total){
    return (cantidad*1)/total

}

function factorial(numero){
    let factorial = 1;
    for (let i=1;i <= numero;i++){
        factorial = factorial * i;
    }

    return factorial;
}

console.log(factorial(3));