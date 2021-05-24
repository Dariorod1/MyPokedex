const {Pokemon, Type} = require('../db');

const getAllApp = async () => {
	return await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};



module.exports = getAllApp;
