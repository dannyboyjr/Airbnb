'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';  
    await queryInterface.bulkInsert(options, [
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
    options.tableName = 'ReviewImages';  
    await queryInterface.bulkDelete(options, null, {});

  }
};