'use strict';

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: "Michael",
        lastName: "Jordan",
        username: 'sixrings',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        firstName: "Wayne",
        lastName: "Gretzky",
        username: 'thegreatgretzky',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        firstName: "Tom",
        lastName: "Brady",
        username: 'fbgreaterthangisele',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};