var AuthService = require("../service/auth-service.js");

module.exports = function(app) {
	app.post("/email-verification",AuthService.sentEmailVarification);
	app.post("/auth",AuthService.authUser);
	app.post("/forget-password",AuthService.forgetPassword);
	
};