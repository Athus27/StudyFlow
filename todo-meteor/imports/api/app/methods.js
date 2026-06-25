import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

Meteor.methods({
  about() {
    return `This is a Meteor application running React with React Router. this is a generated id: ${Random.id()}`;
  },

  "status.get"() {
    return {
      code: 200,
      message: "Meteor Server is running",
    };
  },
});
