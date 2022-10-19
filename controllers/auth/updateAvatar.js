const { User } = require('../../models');
const fs = require('fs/promises');
const path = require('path');
const jimp = require('jimp');
const { VERTICAL_ALIGN_MIDDLE } = require('jimp');

const tempDir = path.join(__dirname, '..', '..', 'public', 'avatars');

const updateAvatar = async (req, res) => {
	try {
		const { _id } = req.user;
		const { path: tempUpload, originalname } = req.file;
		const [extention] = originalname.split('.').reverse();
		const avatarName = `${_id}.${extention}`;
		const resultUpload = path.join(tempDir, avatarName);
		const { file } = req;
		const img = await jimp.read(file.path);
		await img
			.autocrop()
			.cover(
				250,
				250,
				jimp.HORIZONTAL_ALIGN_CENTER || VERTICAL_ALIGN_MIDDLE
			)
			.writeAsync(file.path);
		await fs.rename(tempUpload, resultUpload);
		const avatarURL = path.join('avatars', resultUpload);
		await User.findByIdAndUpdate(_id, { avatarURL });
		res.json({
			user: {
				avatarURL,
			},
			massage: 'Avatar renewed',
		});
	} catch (error) {
		await fs.unlink(req.file.path);
		throw error;
	}
};

module.exports = updateAvatar;
