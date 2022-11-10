'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: "https://photos.zillowstatic.com/fp/6a70ee9d1b18f850dccbf7217ba999ef-cc_ft_384.jpg",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://i.insider.com/6022b33167d1e300113c5037?width=1136&format=jpeg",
        preview: true,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});

  }
};
