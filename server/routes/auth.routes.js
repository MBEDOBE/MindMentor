const {
  register,
  login,
  getAllUsers,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
module.exports = router;
