var express = require('express');
var router = express.Router();

let about = {
  longDescription: 'bleble',
  shortDescription: 'blibli'
};

let productos = [
  { 
    id:1,
    nombre:'blabla',
    precio: 150,
    descripcion:'bleble'
  },
  { 
    id:2,
    nombre:'blibli',
    precio: 150,
    descripcion:'bleble'
  },
  { 
    id:3,
    nombre:'bloblo',
    precio: 150,
    descripcion:'bloblo'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: productos , about: about});
});

router.get('/detalleMenu/:id', function(req, res, next) { 
  let id = req.params.id; 
  res.render('detalleMenu',{producto: searchProductById(id)});
});

function searchProductById(id){
  product = {};
  productos.forEach(function(item){
    if(item.id == id){
      product = item;
    }
  })

  return product;
}

module.exports = router;
