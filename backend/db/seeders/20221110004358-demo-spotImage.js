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
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/b5a1e090-8ebe-4e4d-b839-daa01253312e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/9db8be54-384c-4d50-9d85-1452ae96650c.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/a1923d4d-e358-41d7-bcf4-7655b85bce12.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/6fadb6aa-7aa9-4f5e-b008-01dd8f040bae.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://images.mansionglobal.com/im-344602/?size=0&width=1280",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-861510822469524295/original/07fd5709-821d-4d18-bbd8-dd8a44fafbbb.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-861510822469524295/original/98b8fdd0-438e-4dbc-80ca-53d8141bd9e3.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-861510822469524295/original/aa0e385f-b07b-46bd-9a45-c56e98e2edc6.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-861510822469524295/original/05c770af-885f-42e6-a617-5e3194212e27.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/045145b2-1d86-46a0-98ef-45c86ea0ade8.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/1bcb9e68-6966-4bcd-8c64-41ecef24acf1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/ba696d29-93d0-49fb-b18a-ebf40994de2a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/6f9bc1eb-2d3a-4540-912e-1478b136a272.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/3b0b2eda-3aac-4d31-98ab-0380884b7678.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltad425251f9ec6dfe/5fb782fe97f9f35d942ed339/US_SouthBeach_US_Header.jpg",
        preview: true,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/bbbd400a-b1e1-4323-920c-7e6b9f961a69.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/c086c5df-0755-4b40-bd50-56ad002717bd.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/c731d4b5-c800-4923-acfd-5b3834497ab0.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/65b37fa9-4f8c-4155-b0d6-cf3c7ff6b5be.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/0e6ec38d-a19f-4662-b3a7-e226de0cc87c.jpg",
        preview: true,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-725235749732134008/original/4ab2abe7-7105-46d0-9d49-787fcbdc4e87?im_w=1200",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-725235749732134008/original/33853468-7b7f-4701-85ab-68ac127ad2b4?im_w=1200",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-725235749732134008/original/569071dc-54f4-45f6-b0a7-b0af7168d70c?im_w=1200",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-725235749732134008/original/3606c003-1c0e-4b53-80d4-204898245504?im_w=1200",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://i.pinimg.com/736x/95/1b/36/951b36fcd62f66152f8b6d49e614c949.jpg",
        preview: true,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-943352086003081814/original/460fa098-1ba0-47b7-a3d9-1ba36060b93a.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-943352086003081814/original/13829ebc-805d-4ea7-b11e-ae7714a53e75.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-943352086003081814/original/ce3770db-3e17-4def-a822-6776607bf8ff.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-943352086003081814/original/9cd7595d-c9d2-47ad-90f8-7e5e06d3aa1a.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-550668915610003113/original/1bbd970f-494a-41db-b435-e1af155a7438.jpeg?im_w=1440",
        preview: true,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-550668915610003113/original/a8bcf29b-d720-4832-ad77-911d089e83f1.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-550668915610003113/original/da6e0d36-cf4d-4c6e-9ddd-8b2e380faab0.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-550668915610003113/original/ef992c70-4589-4929-b3a0-58079983aa9f.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-550668915610003113/original/cb074f9c-db89-41e5-82aa-637750908526.jpeg?im_w=1200",
        preview: false,
      },
      
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-768081138982559324/original/0d7d9cc8-5ec5-4400-afec-c2bd0108ce5e.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-768081138982559324/original/dda0ffdb-8d11-4ac9-ae7e-a24a9c7b0d41.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-768081138982559324/original/ac5e3dc9-04a1-4b85-8af5-b6bb8331608f.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-768081138982559324/original/76352d0d-d875-4fa7-a8bb-b29c469bb050.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-768081138982559324/original/1e9ae3bb-0474-4c4d-a489-c22cfe342d11.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://happilyevertravels.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-25-at-10.19.02.png",
        preview: true,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-801302525817525092/original/93e5e474-9293-400f-964e-6a6698b8b206.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-801302525817525092/original/bd5c7920-9f5c-406f-9419-d9adf7e2500f.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-801302525817525092/original/2ca6cc51-dc70-4a7e-83d8-534e5f2407c5.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-801302525817525092/original/8cdc6381-c876-4be6-9131-f883a8ef22af.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://media.timeout.com/images/105975421/750/422/image.jpg",
        preview: true,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/84b9eec6-a106-408a-b049-8da1057e06ac.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/314ba97f-d0d6-4070-87ef-783973dc507c.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/a339abc3-b456-4450-b570-c313cd9a39ec.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/f9cee5c6-7671-4881-9c28-abe0060a4b29.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/8c343c06-78a6-41f3-b706-402457a252dc.jpg",
        preview: true,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/8bd6055e-b9ff-4af4-9b73-6678182815c5.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/99ea1c38-fd5c-4a40-998b-5c82acaf419d.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/f2bd2b4e-8985-4e6d-a98a-59f419ae127e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/f90e86b2-c677-4297-ba05-133d1090ef70.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://i0.wp.com/thisdarlingworld.com/wp-content/uploads/2020/12/bestairbnbschicago36.jpg?resize=1080%2C719&ssl=1",
        preview: true,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53850904/original/f5df5173-58d5-42c9-b9f3-238681d1e67f.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53850904/original/a37f0e21-50c7-4df2-bca2-df1941d1812b.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53850904/original/3a40f9ed-eaad-4ff7-91e0-12fe5a012e1b.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53850904/original/8b36540d-a874-4aad-9016-8671840ed247.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/8e95bd15-c3cb-4a98-9219-841650e2a9ca.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/69979f92-a0e8-4fca-a15c-50c199316ba8.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/fee61631-a6f8-4798-94ca-74fc6a001a00.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/30b8f04c-7f62-4f22-874d-e78428339434.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/528f1942-eb3e-41e7-be47-1043b0382181.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://robbreport.com/wp-content/uploads/2021/09/sfhome6.jpg",
        preview: true,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-836481101799806912/original/e91791f0-4d3d-4507-bd7d-f60825dbf63b.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-836481101799806912/original/85cac314-c6fe-48a1-854c-2e0d39498b5b.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-836481101799806912/original/0940c2e8-acf7-4983-ac48-c146465b5d28.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-836481101799806912/original/e394c5d1-5916-46cb-bf36-0db7b5cc89d8.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/e6ff6df1-8d62-41ee-bacc-e0ccfeda8195.jpg?im_w=720",
        preview: true,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/06adbb5d-f24d-4a4b-8037-23d9722fc824.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/dc04c145-4841-41e6-87c0-be7c98516825.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/581eb743-876e-4dda-a5f9-3b144431dfa7.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/0391225f-5d47-4eb2-bc52-3167dfa4c878.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://images.dailyhive.com/20180606210840/oprah-winfrey-orcas-island-f.jpg",
        preview: true,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-782052999445061566/original/5fe7b4fa-1aec-469f-8109-c1bb93c6a0f9.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-782052999445061566/original/311d23a5-8a58-40fe-949d-ede91708e00a.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-782052999445061566/original/37de48b2-448d-47af-96d2-f910cac9c08c.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-782052999445061566/original/73e339d9-a854-47e3-8c6b-6cc0eca47860.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/22ee9232-35fd-4f24-a34f-663a02a3aa32.jpeg?im_w=1440",
        preview: true,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/273d5cbb-5b8d-4e5f-aee9-f11a7b6ede93.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/0069f013-c3ac-4f2a-920a-c9056749d2af.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/d976be10-c000-4b98-9b6a-bcd151fdb5cd.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/21d47571-cd7d-4f24-ba13-bafb4966f10e.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/aa84ea6f-71a8-4186-bb89-9e07217e1b2c.jpg?im_w=720",
        preview: true,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/dc68a2b5-681f-4627-b39d-e87611b8baa0.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/e0a06cdc-7ac0-482f-bda2-fbdd43515b25.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/1d7976fe-3820-4802-818d-70065c06cf83.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/6ee175aa-7eff-4e2b-8569-002ca74e948a.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/ceb7fdb5-5166-4de1-87da-4e56ad58620b.jpg?im_w=1440",
        preview: true,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/77015ca6-5e46-4330-b312-eb6d60459d47.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/d7be1621-400f-4854-9cd0-f969a463eccb.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/99ee9b85-91e9-4d22-9b94-8341995d73d9.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/79647de8-adec-453b-a4df-41db9d3ed3e6.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/766bcc4e-5bf2-48a4-a3d6-aa17eff79f67.jpg?im_w=720",
        preview: true,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/b922bfa1-fd34-4daf-9ee0-0ccffa457b8b.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/ef3128bd-4791-469d-ab6a-5b72fc233328.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/245c08cc-1ed6-4659-ae10-e5c6cbc29be1.jpg?im_w=1440",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/d84d230d-3618-4766-a73d-352562114c6a.jpg?im_w=1440",
        preview: false,
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options, null, {});

  }
};
