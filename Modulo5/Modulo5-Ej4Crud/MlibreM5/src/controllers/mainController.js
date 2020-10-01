const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {
	index: (req, res) => {
/*	var prodVisted; //probar si pudo pasar estas variables declaradas
	var prodEnVenta;
				for (var i = 0; i < products.length; i++) {
			if (products[i].category == "visited") {
			prodVisited = products[i];
			} else {
			prodEnVenta = products[i];
			}
			
		};*/
		//	res.render("misProductos", { productosVisitados: productosVisitados, productosEnVenta: productosEnVenta })
		//	res.render('index',{prodVisited:prodVisited})		*/
		res.render('index', { products,toThousand})
	},
	search: (req, res) => {
		res.render('results')
	},
};

module.exports = controller;
