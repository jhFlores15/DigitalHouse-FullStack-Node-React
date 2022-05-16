const archivo = require('./funcionesDeTareas');
let comando = process.argv[2];

switch(comando){
    case 'listar':
        listarTareas(archivo.leerJSON());      
        break;
    case 'crear':        
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        archivo.guardarTarea(nuevaTarea);
        listarTareas(archivo.leerJSON());    
        break;
    case 'filtrar':
        let estado = process.argv[3];
        listarTareas(archivo.leerPorEstado(estado));
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        imprimirFuncionesDisponibles();
        break;
    default:
        console.log('No entiendo que quieres hacer.');
        imprimirFuncionesDisponibles();
}

function listarTareas(tareas){
    console.log('Listado de tareas');
    console.log('------------------');
    tareas.forEach(function(item,i){
        console.log(`${i+1} : ${item.titulo} - ${item.estado}`);
    })
}

function imprimirFuncionesDisponibles(){
    console.log('Las acciones disponibles son: listar - crear - filtrar');
    console.log('--------------------------------------');
}



