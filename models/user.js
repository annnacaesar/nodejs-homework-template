const {Schema, model} = require('mongoose');
const gravatar = require('gravatar')

const {handleSaveErrors} = require('../helpers')

const userSchema = new Schema(  {
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String,
  avatarURL: {
    type: String,
    default: function() { 
      return gravatar.url(this.email, {s: "250"}, true)
    },
  },
}, {versionKey: false, timestamps:true})

userSchema.post("save", handleSaveErrors);

const User = model("user", userSchema);

module.exports = User;