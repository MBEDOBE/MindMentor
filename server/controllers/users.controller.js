const User = require("../models/users.model");
const bcrypt = require("bcryptjs");

module.exports.register = async (req, res, next) => {
  try {
    const { fullname, username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $in: req.params.id } }).select([
      "email",
      "username",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.accountSettings = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { fullname, username, email, password, profession, state_country } =
      req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found", status: false });
    }

    if (username !== user.username) {
      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) {
        return res
          .status(400)
          .json({ msg: "Username already used", status: false });
      }
    }

    if (email !== user.email) {
      const emailCheck = await User.findOne({ email });
      if (emailCheck) {
        return res
          .status(400)
          .json({ msg: "Email already used", status: false });
      }
    }

    if (fullname) {
      user.fullname = fullname;
    }
    if (username) {
      user.username = username;
    }
    if (email) {
      user.email = email;
    }
    if (profession) {
      user.profession = profession;
    }
    if (state_country) {
      user.state_country = state_country;
    }
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    await user.save();

    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.accountDelete = async (req, res, next) => {
  try {
    const { userId } = req.params;
    // Find the user by ID and remove them from the database
    const accountDelete = await User.findByIdAndRemove(userId);

    if (!accountDelete) {
      return res.status(404).json({ status: false, msg: "User not found" });
    }

    return res.json({ status: true, msg: "User deleted successfully" });
  } catch (ex) {
    next(ex);
  }
};
