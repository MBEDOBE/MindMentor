const {
  register,
  login,
  getAllUsers,
<<<<<<< HEAD
=======
  getUser,
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
<<<<<<< HEAD
=======
router.get("/user/:id", getUser);

>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
module.exports = router;
