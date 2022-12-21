'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 2,
        review: "Was clean and host were nice but picures on listing were not realistic. Much smaller in real life",
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: "Five stars. Absolutley loved this place!!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 1,
        review: "Best kept secret in utah. Will be returning.",
        stars: 4
      },
      {
        userId: 3,
        spotId: 1,
        review: "It was fine",
        stars: 2
      },
      {
        userId: 3,
        spotId: 4,
        review: "Dirty, Dark, Gross",
        stars: 1
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options, null, {});

  }
};
