const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    unique: true,
    type:String
  },
  name: {
    type: String,
    min: 1,
    max: 50,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  bio: {
    type: String,
    min: 0,
    max: 200,
  },
},{timestamps: true });

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
