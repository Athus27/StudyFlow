import { Accounts } from "meteor/accounts-base";
import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";

/**
 * @typedef {Object} RegisterData
 * @property {string} email
 * @property {string} username
 * @property {string} password
 * @property {string} [confirmPassword]
 */

Meteor.methods({
  /** @param {RegisterData} data */
  async "users.register"(data) {
    check(data, Object);

    /** @type {RegisterData} */
    const payload = data;

    const [emailInUse, usernameInUse] = await Promise.all([
      Meteor.users.findOneAsync(
        { "emails.address": payload.email },
        { fields: { _id: 1 } },
      ),
      Meteor.users.findOneAsync(
        { username: payload.username },
        { fields: { _id: 1 } },
      ),
    ]);

    if (emailInUse) {
      throw new Meteor.Error("403", "E-mail já está em uso.");
    }

    if (usernameInUse) {
      throw new Meteor.Error("403", "Este nome de usuário já está sendo usado.");
    }

    try {
      const { confirmPassword, ...validFields } = payload;
      return await Accounts.createUserAsync(validFields);
    } catch (e) {
      console.error("Erro interno no registro:", e);

      if (e instanceof Meteor.Error) {
        throw e;
      }

      throw new Meteor.Error("500", "Erro de servidor ao processar registro.");
    }
  },
});
