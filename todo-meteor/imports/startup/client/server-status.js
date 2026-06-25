import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  Meteor.call("status.get", (err, res) => {
    if (err) {
      console.error("Error fetching server status:", err);
      return;
    }

    console.log("Server status:", res);
  });
});
