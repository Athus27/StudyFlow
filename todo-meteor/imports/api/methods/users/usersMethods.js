// imports/api/users/users.methods.js

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

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

    // 1. Pre-flight checks em PARALELO (Performance Sênior)
    // Verificamos E-mail E Username ao mesmo tempo antes de prosseguir
    const [emailInUse, usernameInUse] = await Promise.all([
      Meteor.users.findOneAsync({ "emails.address": payload.email }, { fields: { _id: 1 } }),
      Meteor.users.findOneAsync({ username: payload.username }, { fields: { _id: 1 } })
    ]);

    // 2. Erros específicos (UX Melhor)
    if (emailInUse) {
      throw new Meteor.Error("403", "E-mail já está em uso.");
    }

    if (usernameInUse) {
      throw new Meteor.Error("403", "Este nome de usuário já está sendo usado.");
    }

    // 3. Persistência
    try {
      const { confirmPassword, ...validFields } = payload;
      // Agora o banco só será tocado para escrita se os dados forem únicos
      return await Accounts.createUserAsync(validFields);
    } catch (e) {
      // Logamos o erro real no servidor para o desenvolvedor ver no terminal
      console.error("Erro interno no registro:", e);
      
      // Se for um erro que nós mesmos lançamos, repassamos ele
      if (e instanceof Meteor.Error) throw e;

      // Erro genérico apenas para falhas de infraestrutura (DB fora do ar, etc)
      throw new Meteor.Error("500", "Erro de servidor ao processar registro.");
    }
  }
});