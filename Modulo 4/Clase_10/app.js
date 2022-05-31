const express = require('express');
const app = express();



app.get('/404',(req,res) => {
    res.send('Error página gno encontrada');
    //res.send("Hola, estamos en el home");
})
app.listen(3001,() => console.log("Servidor escuchando en puerto 3001"));