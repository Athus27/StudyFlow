import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import "../imports/api/methods/users/usersMethods";

Meteor.methods({
	about() {
		return `This is a Meteor application running React with React Router. this is a generated id: ${Random.id()}`;
	},
});
