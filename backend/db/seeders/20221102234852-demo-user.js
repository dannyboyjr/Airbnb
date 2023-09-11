'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Users"; 
    await queryInterface.bulkInsert(options, [
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
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'user2@user.io',
        firstName: "Tom",
        lastName: "Brady",
        username: 'fbgreaterthangisele',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.io',
        firstName: "Serena",
        lastName: "Williams",
        username: 'queenofcourt',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        firstName: "Lionel",
        lastName: "Messi",
        username: 'futbolgenius',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    options.tableName = 'Users'; 
    await queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};