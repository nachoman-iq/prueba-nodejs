const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
console.log("pase por aca prod");
const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products, toThousand });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productFind;
		//busco el producto por id
		products.forEach(function (product) {
			if (product.id == req.params.id) {
				//si corresponde el id, lo guardo y corto el bucle
				productFind = product;
				res.render('detail', { product: productFind,toThousand });
			}
		});
//		res.render('detail', { products });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};

module.exports = controller;