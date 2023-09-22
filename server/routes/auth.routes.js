const {
  register,
  login,
  getAllUsers,
  getUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
router.get("/user/:id", getUser);

module.exports = router;
