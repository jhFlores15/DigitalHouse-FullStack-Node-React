const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync('tareas.json','utf8'));
    },
    escribirJSON: function(tareas){
        let tareasJson = JSON.stringify(tareas);
        fs.writeFileSync('tareas.json',tareasJson)
    },
    guardarTarea: function(tarea){
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado: function(estado){
        let tareas = this.leerJSON();
        return tareas.filter(function(item,){
            return item.estado == estado;
        },estado)
    }

}

module.exports = archivoTareas;