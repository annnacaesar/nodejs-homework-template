const { User } = require('../../models');

const typeSubscription = ['starter', 'pro', 'business'];

const updateSubscription = async (req, res) => {
	const { _id } = req.user;
	const { subscription } = req.body;
	const howSubscription = typeSubscription.find(
		item => item === subscription
	);
	if (!howSubscription) {
		throw Error('This type of subscription does not exist');
	}
	await User.findByIdAndUpdate(_id, { howSubscription });
	res.json({
		user: {
			howSubscription,
		},
		massage: 'Subscription renewed',
	});
};

module.exports = updateSubscription;
