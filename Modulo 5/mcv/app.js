const express = require('express');
const app = express();
const mainRouter = require('./src/routers/mainRouter');

app.use(express.static('public'));
app.use('/',mainRouter);
app.set('view engine','ejs');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});


