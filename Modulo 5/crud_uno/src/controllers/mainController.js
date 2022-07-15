const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const fileproducts = require('../models/product');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => res.render("index.ejs",{visited:fileproducts.filterProduct('category','visited'), inSale:fileproducts.filterProduct('category','in-sale')}),
	search: (req, res)=> { 
		let keywords = req.query.keywords;
		res.render("results.ejs",{products: fileproducts.matchProduct(keywords), keywords:keywords});
	},
};

module.exports = controller;
