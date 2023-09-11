"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

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
          startDate: "2023-12-29",
          endDate: "2023-12-30",
        },
        {
          spotId: 2,
          userId: 1,
          startDate: "2023-01-8",
          endDate: "2023-01-10",
        },
        {
          spotId: 1,
          userId: 3,
          startDate: "2022-12-8",
          endDate: "2022-12-10",
        },
        {
          spotId: 3,
          userId: 1,
          startDate: "2023-07-3",
          endDate: "2022-07-5",
        },
        {
          spotId: 4,
          userId: 4,
          startDate: "2023-10-01",
          endDate: "2023-10-05",
        },
        {
          spotId: 5,
          userId: 5,
          startDate: "2023-10-15",
          endDate: "2023-10-18",
        },
        {
          spotId: 6,
          userId: 2,
          startDate: "2023-11-03",
          endDate: "2023-11-06",
        },
        {
          spotId: 7,
          userId: 1,
          startDate: "2023-12-10",
          endDate: "2023-12-13",
        },
        {
          spotId: 4,
          userId: 3,
          startDate: "2024-01-05",
          endDate: "2024-01-08",
        },
        {
          spotId: 5,
          userId: 4,
          startDate: "2024-03-20",
          endDate: "2024-03-23",
        },
        {
          spotId: 6,
          userId: 5,
          startDate: "2024-05-01",
          endDate: "2024-05-05",
        },
        {
          spotId: 2,
          userId: 2,
          startDate: "2024-07-15",
          endDate: "2024-07-18",
        },
        {
          spotId: 3,
          userId: 5,
          startDate: "2024-08-08",
          endDate: "2024-08-10",
        },
        {
          spotId: 1,
          userId: 4,
          startDate: "2024-10-01",
          endDate: "2024-10-05",
        },
        {
          spotId: 7,
          userId: 3,
          startDate: "2024-11-12",
          endDate: "2024-11-16",
        },
        {
          spotId: 5,
          userId: 1,
          startDate: "2024-09-01",
          endDate: "2024-09-05",
        },
        {
          spotId: 4,
          userId: 2,
          startDate: "2024-12-10",
          endDate: "2024-12-13",
        },
        {
          spotId: 6,
          userId: 3,
          startDate: "2024-11-01",
          endDate: "2024-11-04",
        },
        {
          spotId: 7,
          userId: 4,
          startDate: "2024-08-05",
          endDate: "2024-08-08",
        },
        {
          spotId: 3,
          userId: 4,
          startDate: "2024-12-01",
          endDate: "2024-12-04",
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
