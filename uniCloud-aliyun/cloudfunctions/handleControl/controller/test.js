const { Controller } = require('uni-cloud-router')
const fs = require("fs")

module.exports = class HelloController extends Controller {
	sayHello () {
		console.log(__dirname)
		return 'hello uniCloud';
	}
	
	async uploadMusic () {
		let result = await uniCloud.uploadFile({
		    cloudPath: "飞鸟和蝉.mp3",
		    fileContent: `${__dirname}/assets/music/任然 - 飞鸟和蝉.mp3`
		});
		return result;
	}
}
