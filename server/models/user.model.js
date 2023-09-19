const mongoose = require("mongoose");

//const UserSchema = new mongoose.Schema(
 // {
  //  name: {
    //  type: String,
      //required: true,
   // },
   // email: {
     // type: String,
     // required: true,
   // },
   // username: {
     // type: String,
     // required: true,
     // unique: true,
     // trim: true,
   // },
   // category: {
     // type: String,
     // required: true,
   // },
 // },
 // {
   // timestamps: true,
 // }
//);

const User = mongoose.model(
	"User",
	new mongoose.Schema({
		username: String,
		email: String,
		password: String,
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Role"
			}
		]
	})
);

module.exports = User;