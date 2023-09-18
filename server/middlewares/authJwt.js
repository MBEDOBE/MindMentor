// Check if token is provided, legal or not 
// Check if roles of the user contains require role or not

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret)
    .then((decoded) => {
      req.userId = decoded.id;
      next();
    })
    .catch((err) => {
      res.status(401).send({
        message: "Unauthorized!",
      });
    });
};

const isAdmin = (req, res, next) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        res.status(500).send({ message: "User not found!" });
        return;
      }

      return Role.find({
        _id: { $in: user.roles },
      });
    })
    .then((roles) => {
      if (!roles || roles.length === 0) {
        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }

      let isAdmin = false;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          isAdmin = true;
          break;
        }
      }

      if (isAdmin) {
        next();
      } else {
        res.status(403).send({ message: "Require Admin Role!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occurred while checking user roles." });
    });
};

const isModerator = (req, res, next) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        res.status(500).send({ message: "User not found!" });
        return;
      }

      return Role.find({
        _id: { $in: user.roles },
      });
    })
    .then((roles) => {
      if (!roles || roles.length === 0) {
        res.status(403).send({ message: "Require Moderator Role!" });
        return;
      }

      let isModerator = false;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          isModerator = true;
          break;
        }
      }

      if (isModerator) {
        next();
      } else {
        res.status(403).send({ message: "Require Moderator Role!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occurred while checking user roles." });
    });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};

module.exports = authJwt;

