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
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/TheVillageatSquawValley-exterior.jpg/1200px-TheVillageatSquawValley-exterior.jpg",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kaufman_Desert_Home.jpg/1200px-Kaufman_Desert_Home.jpg",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Case_Study_House_No._22.JPG",
        preview: true,
      },
      {
        spotId: 4,
        url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Miami_Springs_FL_Lua_Curtiss_House_I01.jpg",
        preview: true,
      },
      {
        spotId: 5,
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/East_69th_Street_001.JPG",
        preview: true,
      },
      {
        spotId: 6,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/House_at_1300_Carroll_Ave.%2C_Los_Angeles%2C_California.JPG/1200px-House_at_1300_Carroll_Ave.%2C_Los_Angeles%2C_California.JPG",
        preview: true,
      },
      {
        spotId: 7,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lovell_Beach_House_02.jpg/1280px-Lovell_Beach_House_02.jpg",
        preview: true,
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options, null, {});

  }
};
