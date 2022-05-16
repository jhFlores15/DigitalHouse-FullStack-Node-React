let superheroes = [
    {
        nombre: 'Batman',
        saludar:function(){
            return "Hola soy "+ this.nombre
        }
    },
    {
        nombre: 'Iron Man',
        saludar:function(){
            return "Hola soy "+ this.nombre
        }
    }
];

module.exports = superheroes;