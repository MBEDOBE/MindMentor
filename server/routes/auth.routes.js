const { verifySignUp } = require("../middlewares");
const controller =  require("../controllers/auth.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Acees-Control-Allow-Header",
			"x-acces-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"api/auth/signup",
		[
			verifySignUp.checkDuplicateUsernameOrEmail,
			verifySignUp.checkRolesExisted
		],
		controller.signup

	);

	app.post("/app/auth/signin", controller.signin);
};
