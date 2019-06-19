const axios = require("axios");
module.exports = apiPull = () => {
	axios.get("http://dnd5eapi.co/api/spells/1/").then(res => {
		console.log(res);
	});
};
