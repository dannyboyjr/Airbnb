'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
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
    await queryInterface.bulkDelete('Reviews', null, {});

  }
};
