var ProductService = require("../service/product-service.js");

module.exports = function(app) {
	app.get("/products",ProductService.getAllProducts);
	app.post("/products",ProductService.addProduct);
	app.delete("/products/:papa",ProductService.deleteProductById);
};