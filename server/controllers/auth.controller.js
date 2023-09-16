// SignUp: Create new User in database (role is user if not specifying role)

const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	});

	User.save((err, user) => {
		if (err) {
			res.status(500).send({message: err});
			return;
		}

		if (req.body.roles) {
			Role.find(
				{
					name: { $in: req.body.roles }
				},
				(err, roles) => {
					if (err) {
						res.status(500).send({message: err});
						return;
					}

					user.roles = roles.map(role => role._id);
					user.save(err => {
						if (err) {
							res.status(500).send({message: err});
							return;
						}

						res.send({message: "User was registered successfully!"});
					});
				}
			);
		} else {
			Role.findOne({name: "user"}, (err, role) => {
				if (err) {
					res.status(500).send({message: err});
					return;
				}

				user,roles = [role._id];
				user.save(err => {
					if (err) {
						res.status(500).send({message: err});
						return;
					}

					res.send({ message: "User was registered successfully!" });
				});
			});
		}
	});
};

// SignIn: Find username of the request in database, if it exists
// compare password with password in database using bcrypt
// if it is correct 
// generate a token using jsonwebtoken 
// return user information & access Token

exports.signin = (req, res) => {
	User.findOne({
		username: req.body.username
	})

	.populate("role", "-__v")
	.exec((err, user) => {
		if (err) {
			res.status(500).send({message: err});
			return;
		}

		if (!user) {
			return res.status(404).send({message: "User notv found"});
		}

		var passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		const token = jwt.sign({ id: user.id },
			                config.secret,
			{
				algorithm: 'HS256',
				allowInsecureKeySizes: true,
				expireIn: 86400, // 24hours
			});

		var authorities = [];

		for (let i = 0; i < user.roles.length; i++) {
			authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
		}
		res.status(200).send({
			id: user._id,
			username: user.username,
			email: user.email,
			roles: authorities,
			accessToken: token
		});
	});
};
