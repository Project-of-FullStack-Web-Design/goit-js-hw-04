/* jshint esversion: 6, browser: true */
const profile = {
	username: "Jacob",
	playTime: 300,

	getInfo() {
		"use strict";
		return `${this.username} has ${this.playTime} active hours!`;
	},

	changeUsername(newName) {
		"use strict";
		this.username = newName;
	},

	updatePlayTime(hours) {
		"use strict";
		this.playTime += hours;
	},
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
