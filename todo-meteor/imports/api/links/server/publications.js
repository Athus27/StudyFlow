import { Meteor } from "meteor/meteor";

import { LinksCollection } from "../links.collection";

Meteor.publish("links", function publishLinks() {
  return LinksCollection.find();
});
