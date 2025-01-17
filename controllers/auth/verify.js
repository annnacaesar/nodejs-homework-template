const { RequestError } = require("../../helpers");
const { User } = require("../../models");

const verify = async(req,res) => {
const {verificationToken} = req.params;
console.log(verificationToken);
const user = await User.findOne({verificationToken})
if(!user) {
	throw RequestError(404);
}
await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""})
res.json({
	message: "Email verify success"
})
}

module.exports = verify;