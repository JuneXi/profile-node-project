var ProfileService = require("../service/profile-service.js");

module.exports = function(app) {
	app.put("/profiles",ProfileService.updateProfile);
	app.post("/profiles",ProfileService.addProfile);
	app.get("/profile",ProfileService.getProfileById);
	app.get("/profiles",ProfileService.getAllProfiles);
	app.delete("/profiles",ProfileService.deleteProfileById);
	app.get("/fact",ProfileService.getFact);
	app.get("/frog",ProfileService.getFrog);
	app.get("/greeting",ProfileService.greeting);
	app.get("/cool",ProfileService.cool);
	app.post("/auth",ProfileService.authUser);
};