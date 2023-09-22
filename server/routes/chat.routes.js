const {
  createChat,
  findChat,
  userChat,
} = require("../controllers/chat.controller");

const router = require("express").Router();

router.post("/", createChat);
router.get("/:userId", userChat);
router.get("/find/:firstId/:secondId", findChat);

module.exports = router;
