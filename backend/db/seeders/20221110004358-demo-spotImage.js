'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    options.tableName = 'SpotImages';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: "https://photos.zillowstatic.com/fp/6a70ee9d1b18f850dccbf7217ba999ef-cc_ft_384.jpg",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://i.insider.com/6022b33167d1e300113c5037?width=1136&format=jpeg",
        preview: false,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options, null, {});

  }
};
