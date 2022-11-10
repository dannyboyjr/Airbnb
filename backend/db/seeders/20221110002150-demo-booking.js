'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Bookings', [
        {
          spotId: 1,
          userId: 2,
          startDate: '2022-12-1',
          endDate: '2022-12-7'
      },
      {
        spotId: 2,
        userId: 1,
        startDate: '2023-01-8',
        endDate:'2023-01-10'
    },
    {
      spotId: 1,
      userId: 3,
      startDate: '2022-12-8',
      endDate:'2022-12-10'
  },
  {
    spotId: 3,
    userId: 1,
    startDate: '2023-07-3',
    endDate:'2022-07-5'
},
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
  
     await queryInterface.bulkDelete('Bookings', null, {});
     
  }
};
