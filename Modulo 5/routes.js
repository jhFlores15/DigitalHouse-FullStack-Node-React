/**
 * router usa los controladores
 * app.js usa router
 */


/*****CONTROLADOR*****/

let carritoController = {
   
    sacarItem: function(){},
    consultarItem: function(){},
    agregarItem: function(req,res){
       res.send("Item Agregado");
    }
    
 };
 
 module.exports = carritoController

/**************ROUTER*************/

const express = require('express')
const router = express.Router();
const carritoController = require('../controllers/carritoController')

router.get('/:item',carritoController.agregarItem);

module.exports = router
/************************* */


const express = require('express');
const app = express();

app.get('/series/:serieId',function(req,res){
    let serieId = req.params.serieId;
    res.send(serieId);
});

/*********APP.JS*********** */

const rutasSeries = require('./routes/series');
app.use('/series',rutasSeries);

/*************** ********** */

/**
 let serie = [];
    for(let i =0; i< series.length;i++){
        if(series[i]['id'] == req.params.id){
            serie = series[i];
        }
    }

    return res.send(serie);
 */
