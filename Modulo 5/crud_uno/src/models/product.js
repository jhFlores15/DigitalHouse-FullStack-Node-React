const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

let fileProduct = {
    file: 'products.json',
    readJSON: function(){        
        return JSON.parse(fs.readFileSync(productsFilePath,'utf8'));
    },
    writeJSON: function(products){
        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productsFilePath,productsJson)
    },
    saveProduct: function(product){
        let products = this.readJSON();
        let lastProduct = products.pop();
        product.id = lastProduct.id+ 1;
        products.push(product);
        this.writeJSON(products);

        return product;
    },
    updateProduct: function(product){
        let products = this.readJSON();
        let pepe = products.map(function(item){
            if(item.id == product.id){ 
                product.image = item.image;               
                return item = product;
            }else{
                return item;
            }
           
        })
        this.writeJSON(pepe);
    },
    deleteProduct: function(id){
        let products = this.readJSON();
        products = products.filter(function(item){
            return item.id != id;
        });
        this.writeJSON(products);
    },
    getProductById: function(id){ 
        let products = this.readJSON();
        let product = {};
        products.forEach(function(item){
            if(item.id == id){
              product = item;
            }
        })
        return product;        
    },
    filterProduct(atribute, value){
        let products = this.readJSON();
        return products.filter(function(item){
            return item[atribute] == value;
        });
    },
    matchProduct(keywords){
        let products = this.readJSON();
        let resultFilter = products.filter(function(item){
            return (item.name).includes(keywords);
        });

        return resultFilter;
    }
}

module.exports = fileProduct;