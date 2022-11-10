'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 5,
        url: "https://cdn.theatlantic.com/media/old_wire/img/upload/2011/05/12/Crackhouse%20623%20Peter%20Moskos.jpg"
      },
      {
        reviewId: 3,
        url: "https://i0.heartyhosting.com/www.powder.com/wp-content/uploads/2017/03/AC_Lifestyle_2015_Utah_115.jpg?fit=941%2C609&ssl=1&resize=941%2C609"
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ReviewImages', null, {});

  }
};