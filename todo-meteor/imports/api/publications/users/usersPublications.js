import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {check} from "meteor/check";


//modulo de publicacao de dados dos usuarios
Meteor.publish("users", function () {
  return Meteor.users.find({}, { fields: { username: 1 } });
});
