const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.listen(3030,() => console.log("Servidor escuchando en puerto 3030"));

app.get('/', (req,res) => { 
  let index= path.resolve(__dirname,"./views/index.html")
  res.sendFile (index)
});