const { register } = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
