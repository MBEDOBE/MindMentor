const ChatModel = require("../models/chatmodel");

module.exports.createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.recieverId],
  });

  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.ststus(500).json(error);
  }
};

module.exports.userChat = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.ststus(500).json(error);
  }
};

module.exports.findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.ststus(500).json(error);
  }
};
