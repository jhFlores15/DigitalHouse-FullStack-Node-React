const fs = require('fs');
const path = require('path');

const fileproducts = require('../models/product');
const categoriesFilePath = path.join(__dirname, '../data/categories.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => res.render("products.ejs", { products: fileproducts.readJSON() }),

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id; 
		res.render("detail.ejs", { product: fileproducts.getProductById(id) })
	},

	// Create - Form to create
	create: (req, res) => res.render("product-create-form.ejs"),

	// Create -  Method to store
	store: (req, res) => {
		let params = req.body;
		let product = {
			"name": params.name,
			"price": params.price,
			"discount": params.discount,
			"category": params.category,
			"description": params.description
		};

		let newProduct = fileproducts.saveProduct(product);

		res.redirect('products/detail/'+newProduct.id);
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id;		
		res.render("product-edit-form.ejs", { productToEdit: fileproducts.getProductById(id), categories:categories })
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id; 
		let params = req.body;
		let product = {
			"id": id,
			"name": params.name,
			"price": params.price,
			"discount": params.discount,
			"category": params.category,
			"description": params.description
		};

		fileproducts.updateProduct(product);

		res.redirect('/products/detail/'+id);
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let id = req.params.id; 
		fileproducts.deleteProduct(id);
		res.redirect('/products');
	}
};
module.exports = controller;