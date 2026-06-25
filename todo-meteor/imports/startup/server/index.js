import { Meteor } from "meteor/meteor";

import "../../api/api";
import { seedLinks } from "./fixtures";

/*
  Meteor já traz a camada propria de comunicação cliente-servidor.
*/

Meteor.startup(async () => {
  await seedLinks();
});
