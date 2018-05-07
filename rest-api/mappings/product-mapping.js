var ProductService = require("../service/product-service.js");

module.exports = function(app) {
	app.get("/products",ProductService.getAllProducts);
	app.post("/products",ProductService.addProduct);
	app.put("/products",ProductService.updateProduct);
	app.delete("/products/:papa",ProductService.deleteProductById);
};