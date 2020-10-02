const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		var prodVisited = [];
		var prodEnVenta = [];
		for (var i = 0; i < products.length; i++) {
           //armo un if por cada categoria por si en un futuro debiera suamr una
			if (products[i].category == "visited") {
				prodVisited.push(products[i]);
			};
			
			if (products[i].category == "in-sale") {
				prodEnVenta.push(products[i]);
			};
		};
		res.render('index',{prodVisited:prodVisited,prodEnVenta:prodEnVenta,toThousand}) //paso a  la vista los parametros que necesito		
		//res.render('index', { products, toThousand }) // CUANDO LO PASO ASI "SI" FUNCIONA.Y EL IF LO HAGO EN LA VISTA
	},
	search: (req, res) => {
		res.render('results')
	},
};

module.exports = controller;
