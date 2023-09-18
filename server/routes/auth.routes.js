const { verifySignUp } = require("../middlewares");
const authController = require("../controllers/auth.controller");

module.exports = function (app) {
  // Enable CORS and allow necessary headers
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Route for user signup
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    authController.signup
  );

  // Route for user signin
  app.post("/api/auth/signin", authController.signin);
};

