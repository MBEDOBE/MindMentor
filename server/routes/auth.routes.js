const {
  register,
  login,
  getAllUsers,
  getUser,
  accountSettings,
  accountDelete,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
router.get("/user/:id", getUser);
router.put("/accountsettings/:userId", accountSettings);
router.delete("/accountdelete/:userId", accountDelete);

module.exports = router;
