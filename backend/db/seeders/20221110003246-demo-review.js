'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 2,
        review: "Was clean and host were nice but picures on listing were not realistic. Much smaller in real life",
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: "Five stars. Absolutley loved this place!!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 1,
        review: "Best kept secret in utah. Will be returning.",
        stars: 4
      },
      {
        userId: 3,
        spotId: 1,
        review: "It was fine",
        stars: 2
      },
      {
        userId: 3,
        spotId: 4,
        review: "Dirty, Dark, Gross",
        stars: 1
      },
      {
        userId: 4,
        spotId: 1,
        review: "The skiing was fantastic and so was this place!",
        stars: 5
      },
      {
        userId: 5,
        spotId: 2,
        review: "Tranquil and amazing, great golf course!",
        stars: 5
      },
      {
        userId: 4,
        spotId: 3,
        review: "A bit overpriced, but overall a good experience.",
        stars: 3
      },
      {
        userId: 5,
        spotId: 4,
        review: "Wonderful location, would visit again!",
        stars: 4
      },
      {
        userId: 2,
        spotId: 5,
        review: "Great stay. However, the host where super particular and checked in frequently which I thought was a bit much.",
        stars: 4
      },
      {
        userId: 1,
        spotId: 6,
        review: "Loved the surfing spots nearby!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 7,
        review: "A hidden gem, loved it!",
        stars: 4
      },
      {
        userId: 4,
        spotId: 5,
        review: "Great location, but noisy at night.",
        stars: 3
      },
      {
        userId: 3,
        spotId: 6,
        review: "Fantastic beach view, but the service was lacking.",
        stars: 3
      },
      {
        userId: 5,
        spotId: 7,
        review: "host was super rude...",
        stars: 2
      },
      {
        userId: 4,
        spotId: 8,
        review: "Close to the metro and convenient.",
        stars: 4
      },
      {
        userId: 5,
        spotId: 9,
        review: "Quiet place, but a bit far from city center.",
        stars: 3
      },
      {
        userId: 1,
        spotId: 10,
        review: "Lovely place, would definitely come back.",
        stars: 5
      },
      {
        userId: 5,
        spotId: 11,
        review: "A bit noisy due to the nearby bar.",
        stars: 2
      },
      {
        userId: 4,
        spotId: 12,
        review: "Amazing view and great service.",
        stars: 5
      },
      {
        userId: 2,
        spotId: 2,
        review: "Nice place but golf course was quite expensive.",
        stars: 4
      },
      {
        userId: 4,
        spotId: 14,
        review: "Rustic charm but modern amenities.",
        stars: 4
      },
      {
        userId: 3,
        spotId: 15,
        review: "Not what was shown in pictures.",
        stars: 1
      },
      {
        userId: 4,
        spotId: 16,
        review: "Great place for a weekend getaway.",
        stars: 5
      },
      {
        userId: 1,
        spotId: 17,
        review: "Good location, poor customer service.",
        stars: 2
      },
      {
        userId: 5,
        spotId: 18,
        review: "Felt like home, wonderful place!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 19,
        review: "Smelly room and unclean bathroom.",
        stars: 1
      },
      {
        userId: 4,
        spotId: 20,
        review: "Beautiful interior but lacking parking space.",
        stars: 3
      },
      {
        userId: 2,
        spotId: 11,
        review: "Excellent breakfast and good service.",
        stars: 4
      },
      {
        userId: 3,
        spotId: 8,
        review: "Too noisy and crowded.",
        stars: 2
      },
      {
        userId: 5,
        spotId: 10,
        review: "Comfortable stay, but WiFi kept dropping.",
        stars: 3
      },
      {
        userId: 4,
        spotId: 15,
        review: "Loved the view and location.",
        stars: 4
      },
      {
        userId: 1,
        spotId: 18,
        review: "Mediocre service but great location.",
        stars: 3
      },
      {
        userId: 5,
        spotId: 13,
        review: "Overpriced for what's offered.",
        stars: 2
      },
      {
        userId: 4,
        spotId: 19,
        review: "The place was wonderful, very clean and comfortable.",
        stars: 5
      },
      {
        userId: 3,
        spotId: 17,
        review: "Not as good as advertised.",
        stars: 1
      },
      {
        userId: 1,
        spotId: 20,
        review: "Outstanding amenities and superb customer service.",
        stars: 5
      },
      {
        userId: 2,
        spotId: 15,
        review: "Clean but far from major attractions.",
        stars: 3
      },
      {
        userId: 5,
        spotId: 15,
        review: "Noisy neighbors ruined the stay.",
        stars: 2
      },
      {
        userId: 1,
        spotId: 14,
        review: "Fantastic service and beautiful setting.",
        stars: 5
      },
      {
        userId: 4,
        spotId: 12,
        review: "Unbeatable view but could be cleaner.",
        stars: 3
      },
      {
        userId: 2,
        spotId: 16,
        review: "Wouldn't recommend. Not a great neighborhood.",
        stars: 1
      },
      {
        userId: 5,
        spotId: 13,
        review: "Affordable but lacks certain amenities.",
        stars: 3
      },
      {
        userId: 3,
        spotId: 19,
        review: "Didn't feel secure in the neighborhood.",
        stars: 1
      },
      {
        userId: 1,
        spotId: 15,
        review: "Loved the close proximity to the beach.",
        stars: 4
      },
      {
        userId: 5,
        spotId: 17,
        review: "Decent stay, nothing exceptional.",
        stars: 3
      },
      {
        userId: 4,
        spotId: 20,
        review: "Excellent facilities, would recommend!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 14,
        review: "Expensive but worth every penny.",
        stars: 4
      },
      {
        userId: 3,
        spotId: 9,
        review: "Good value for money.",
        stars: 4
      },
      {
        userId: 5,
        spotId: 16,
        review: "Clean room but slow Wi-Fi.",
        stars: 3
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options, null, {});

  }
};
