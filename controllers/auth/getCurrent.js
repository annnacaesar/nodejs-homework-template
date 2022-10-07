const getCurrent = async (req, res, next) => {
	const { name, subscription } = req.user;
	res.json({
		name,
		subscription,
	});
};

module.exports = getCurrent;
