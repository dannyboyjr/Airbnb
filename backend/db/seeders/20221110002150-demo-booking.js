"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const formatDate = (daysToAdd) => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysToAdd);
  return `${futureDate.getFullYear()}-${
    futureDate.getMonth() + 1
  }-${futureDate.getDate()} 06:00:00.000 +00:00`;
};


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    await queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 2,
          startDate: formatDate(7),
          endDate: formatDate(9),
        },
        {
          spotId: 2,
          userId: 3,
          startDate: formatDate(30),
          endDate: formatDate(34),
        },
        {
          spotId: 20,
          userId: 1,
          startDate: formatDate(10),
          endDate: formatDate(14),
        },
        {
          spotId: 6,
          userId: 2,
          startDate: formatDate(20),
          endDate: formatDate(26),
        },
        {
          spotId: 4,
          userId: 4,
          startDate: formatDate(30),
          endDate: formatDate(36),
        },
        {
          spotId: 8,
          userId: 5,
          startDate: formatDate(40),
          endDate: formatDate(44),
        },
        {
          spotId: 7,
          userId: 5,
          startDate: formatDate(50),
          endDate: formatDate(54),
        },
        {
          spotId: 3,
          userId: 1,
          startDate: formatDate(10),
          endDate: formatDate(14),
        },
        {
          spotId: 4,
          userId: 2,
          startDate: formatDate(20),
          endDate: formatDate(26),
        },
        {
          spotId: 5,
          userId: 4,
          startDate: formatDate(30),
          endDate: formatDate(36),
        },
        {
          spotId: 6,
          userId: 5,
          startDate: formatDate(40),
          endDate: formatDate(44),
        },
        {
          spotId: 7,
          userId: 6,
          startDate: formatDate(55),
          endDate: formatDate(59),
        },
        {
          spotId: 8,
          userId: 1,
          startDate: formatDate(60),
          endDate: formatDate(63),
        },
        {
          spotId: 9,
          userId: 2,
          startDate: formatDate(70),
          endDate: formatDate(76),
        },
        {
          spotId: 10,
          userId: 3,
          startDate: formatDate(80),
          endDate: formatDate(83),
        },
        {
          spotId: 11,
          userId: 4,
          startDate: formatDate(100),
          endDate: formatDate(104),
        },
        {
          spotId: 12,
          userId: 5,
          startDate: formatDate(120),
          endDate: formatDate(124),
        },
        {
          spotId: 13,
          userId: 6,
          startDate: formatDate(140),
          endDate: formatDate(144),
        },
        {
          spotId: 14,
          userId: 1,
          startDate: formatDate(150),
          endDate: formatDate(153),
        },
        {
          spotId: 15,
          userId: 2,
          startDate: formatDate(160),
          endDate: formatDate(163),
        },
        {
          spotId: 16,
          userId: 3,
          startDate: formatDate(170),
          endDate: formatDate(176),
        },
        {
          spotId: 17,
          userId: 4,
          startDate: formatDate(180),
          endDate: formatDate(186),
        },
        {
          spotId: 18,
          userId: 5,
          startDate: formatDate(190),
          endDate: formatDate(195),
        },
        {
          spotId: 19,
          userId: 6,
          startDate: formatDate(200),
          endDate: formatDate(206),
        },
        {
          spotId: 20,
          userId: 1,
          startDate: formatDate(210),
          endDate: formatDate(214),
        },
        {
          spotId: 1,
          userId: 3,
          startDate: formatDate(220),
          endDate: formatDate(224),
        },
        {
          spotId: 2,
          userId: 4,
          startDate: formatDate(230),
          endDate: formatDate(236),
        },
        {
          spotId: 3,
          userId: 5,
          startDate: formatDate(240),
          endDate: formatDate(245),
        },
        {
          spotId: 4,
          userId: 6,
          startDate: formatDate(250),
          endDate: formatDate(256),
        },
        {
          spotId: 5,
          userId: 2,
          startDate: formatDate(260),
          endDate: formatDate(265),
        },
        {
          spotId: 6,
          userId: 3,
          startDate: formatDate(270),
          endDate: formatDate(276),
        },
        {
          spotId: 7,
          userId: 4,
          startDate: formatDate(280),
          endDate: formatDate(285),
        },
        {
          spotId: 8,
          userId: 5,
          startDate: formatDate(290),
          endDate: formatDate(296),
        },
        {
          spotId: 9,
          userId: 6,
          startDate: formatDate(300),
          endDate: formatDate(305),
        },
        {
          spotId: 10,
          userId: 1,
          startDate: formatDate(310),
          endDate: formatDate(316),
        }        
      ],
      {}
    );
    
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    await queryInterface.bulkDelete(options, null, {});
  },
};
