const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.listen(3030,() => console.log("Servidor escuchando en puerto 3001"));

app.get('/', (req,res) => { 
  let index= path.resolve(__dirname,"./views/index.html")
  res.sendFile (index)
})

app.get('/babbage', (req,res) => { 
  let babbage= path.resolve(__dirname,"./views/babbage.html")
  res.sendFile (babbage)
})

app.get('/berners-lee', (req,res) => { 
  let bernersLee= path.resolve(__dirname,"./views/berners-lee.html")
  res.sendFile (bernersLee)
})

app.get('/clarke', (req,res) => { 
  let clarke= path.resolve(__dirname,"./views/clarke.html")
  res.sendFile (clarke)
})

app.get('/hamilton', (req,res) => { 
  let hamilton= path.resolve(__dirname,"./views/hamilton.html")
  res.sendFile (hamilton)
})

app.get('/hopper', (req,res) => { 
  let hopper= path.resolve(__dirname,"./views/hopper.html")
  res.sendFile (hopper)
})

app.get('/lovelace', (req,res) => { 
  let lovelace= path.resolve(__dirname,"./views/lovelace.html")
  res.sendFile (lovelace)
})

app.get('/turing', (req,res) => { 
  let turing= path.resolve(__dirname,"./views/turing.html")
  res.sendFile (turing)
})