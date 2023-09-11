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
        url: "https://images.mansionglobal.com/im-344602/?size=0&width=1280",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/159acce3-50e1-4a2b-9682-6c3384762691.jpg",
        preview: true,
      },
      {
        spotId: 4,
        url: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltad425251f9ec6dfe/5fb782fe97f9f35d942ed339/US_SouthBeach_US_Header.jpg",
        preview: true,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/0e6ec38d-a19f-4662-b3a7-e226de0cc87c.jpg",
        preview: true,
      },
      {
        spotId: 6,
        url: "https://i.pinimg.com/736x/95/1b/36/951b36fcd62f66152f8b6d49e614c949.jpg",
        preview: true,
      },
      {
        spotId: 7,
        url: "https://i0.wp.com/files.tripstodiscover.com/files/2020/12/6-Bedroom-Luxury-Villa-on-Dominical-Beach-1.jpg?resize=784%2C588",
        preview: true,
      },
      {
        spotId: 8,
        url: "https://www.asiaone.com/sites/default/files/inline-images/050719_airbnbluxe.jpg",
        preview: true,
      },
      {
        spotId: 9,
        url: "https://happilyevertravels.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-25-at-10.19.02.png",
        preview: true,
      },
      {
        spotId: 10,
        url: "https://media.timeout.com/images/105975421/750/422/image.jpg",
        preview: true,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/8c343c06-78a6-41f3-b706-402457a252dc.jpg",
        preview: true,
      },
      {
        spotId: 12,
        url: "https://i0.wp.com/thisdarlingworld.com/wp-content/uploads/2020/12/bestairbnbschicago36.jpg?resize=1080%2C719&ssl=1",
        preview: true,
      },
      {
        spotId: 13,
        url: "https://images.exoticestates.com/files/presets/pg_sm/property/2612/gallery/hawaii_oahu_luxury_villa_vacation_rental_01.jpeg",
        preview: true,
      },
      {
        spotId: 14,
        url: "https://robbreport.com/wp-content/uploads/2021/09/sfhome6.jpg",
        preview: true,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/e6ff6df1-8d62-41ee-bacc-e0ccfeda8195.jpg?im_w=720",
        preview: true,
      },
      {
        spotId: 16,
        url: "https://images.dailyhive.com/20180606210840/oprah-winfrey-orcas-island-f.jpg",
        preview: true,
      },
      {
        spotId: 17,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max700/239066928.jpg?k=a74e965110039aee7e6718f42c9607e1a39caf615083f0d480901f79811c33af&o=",
        preview: true,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/aa84ea6f-71a8-4186-bb89-9e07217e1b2c.jpg?im_w=720",
        preview: true,
      },
      {
        spotId: 19,
        url: "https://static.trip101.com/main_pics/293621/medium.jpg",
        preview: true,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/766bcc4e-5bf2-48a4-a3d6-aa17eff79f67.jpg?im_w=720",
        preview: true,
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options, null, {});

  }
};
