const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const fileproducts = require('../models/product');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => res.render("index.ejs",{visited:fileproducts.filterProduct('category','visited'), inSale:fileproducts.filterProduct('category','in-sale')}),
	search: (req, res) => res.render(path.resolve(__dirname,"../views/results.ejs")),
};

module.exports = controller;
