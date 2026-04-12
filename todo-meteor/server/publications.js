import { Meteor } from "meteor/meteor";

import { LinksCollection } from "../imports/api/collections/links";
import "../imports/api/publications/users/usersPublications";

Meteor.publish("links", function () {
	return LinksCollection.find();
});
