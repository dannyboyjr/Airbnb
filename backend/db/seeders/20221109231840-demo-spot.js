'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots'; 
      await queryInterface.bulkInsert(options, [
        {
          userId: 1,
          address: "2087 E Village Point Way",
          city: "Sandy",
          state: "UT",
          country: "USA",
          lat: 40.582953764669334,
          lng: -111.83150691469338,
          name: "the Skiing House",
          description: "Great if you're coming to utah for skking. 10 minutes away from 4 world class ski resorts",
          price: 499.55,
          previewImage: null
      },
      {
        userId: 1,
        address: "810 Bandolier Ln ",
        city: "Washington",
        state: "UT",
        country: "USA",
        lat: 37.14261051047719,
        lng: -113.52670993666743,
        name: "Old People Golf Lounge",
        description: "Red Sand, Golf, and heat.",
        price: 235.27,
        previewImage: null
    },
      {
        userId: 2,
        address: "Donky Way",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 11.582953764669334,
        lng: -11.83150691469338,
        name: "Cool Guy Pad",
        description: "Beach, drinks, and babes",
        price: 1200.55,
        previewImage: null
    },
    {
      userId: 3,
      address: "1446 Ocean Dr Association",
      city: "Miami",
      state: "FL",
      country: "USA",
      lat: 25.786878780434577,
      lng: -80.12983134257334,
      name: "Miami Beach",
      description: "2 bed 1 Bath right on Mami Beach! Amazing location",
      price: 300.00,
      previewImage: null
  }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots'; 
     await queryInterface.bulkDelete(options, null, {});
     
  }
};

