"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    await queryInterface.bulkInsert(
      options,
      [
        {
          userId: 1,
          address: "2087 E Olympus Lane",
          city: "Park City",
          state: "UT",
          country: "USA",
          lat: 40.6480,
          lng: -111.4990,
          name: "Ski In Ski Out",
          description:
            "Perfect for skiing enthusiasts visiting Utah, located just 10 minutes away from 4 world-class ski resorts.",
          price: 325.0,
          previewImage: null,
        },
        {
          userId: 1,
          address: "17-Mile Drive",
          city: "Pebble Beach",
          state: "CA",
          country: "USA",
          lat: 36.568985,
          lng: -121.952803,
          name: "Pebble Beach Getaway",
          description: "Experience the beauty of Pebble Beach with golf, scenic drives, and relaxation. Steps from Carmel-By-The-Seas bustling downtown district and Carmel Beach, this scenic villa enjoys city and ocean views from its outstanding location. When you are not out exploring local shops, bars, and delicious seafood restaurants, pour yourself a glass of wine and head up to the private balcony for an incredible sunset by the ocean.",
          price: 435.27,
          previewImage: null
        },         
        {
          userId: 2,
          address: "Pacific Coast Highway",
          city: "Malibu",
          state: "CA",
          country: "USA",
          lat: 34.0259,
          lng: -118.7798,
          name: "Malibu Beach Retreat",
          description: `
        The space
        Designed by Skrillex, this Malibu Beach Oasis has easy access to the ocean, amazing views, and the privacy that your A-listers will appreciate. With 18-foot ceilings and massive openings to ocean-facing terraces, this sprawling beach house is the perfect place to host. Strap in for refreshing dips in the pool, a friendly competition in the game room, and incredible sunsets. In the morning, hit the home gym or just relax in the theatre.
        
        BEDROOM & BATHROOM
        • Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower & bathtub, Alfresco rain shower, Dual vanity, Smart TV, Streaming services, Lounge area, Direct access to pool
        • Bedroom 2: Queen size bed, Ensuite bathroom with stand-alone shower, Dual vanity, Walk-in closet, Smart TV, Terrace, Ocean view
        • Bedroom 3: Queen size bed, Ensuite bathroom with stand-alone shower, Dual vanity, Walk-in closet, Smart TV
        • Bedroom 4: Queen size bed, Ensuite bathroom with stand-alone shower, Dual vanity, Walk-in closet, Smart TV, Terrace, Ocean view
        • Bedroom 5: Double size bed, Ensuite bathroom with shower/tub combo, Walk-in closet, Smart TV
        
        Guest house
        • Bedroom 6: King size bed, Ensuite bathroom with stand-alone shower, Walk-in closet, Smart TV
        
        OUTDOOR FEATURES
        • Outdoor living space
          `,
          price: 800.55,
          previewImage: true
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
          price: 200.0,
          previewImage: true,
        },
        {
          userId: 1,
          address: "234 Street",
          city: "The Hamptons",
          state: "NY",
          country: "USA",
          lat: 40.9634,
          lng: -72.1848,
          name: "Luxury Hamptons Getaway",
          description: "Experience luxury in the heart of The Hamptons. Book your stay now!",
          price: 430.0,
          previewImage: true
        },
        {
          userId: 3,
          address: "123 Guadalupe Blvd",
          city: "Rosarito",
          state: "BC",
          country: "Mexico",
          lat: 32.3331,
          lng: -117.0543,
          name: "Rosarito Beach House",
          description: `Other things to note
          Caretaker included in the daily rates. Employees will have free access to the house premises and permission to maintain the cleanliness and order of the house, such as turning off electronic appliances that are not being used, etc....
          
          Guests are liable for the actions of others inside the house during their stay.
          
          The guest is liable for all damaged goods, damage to the property or anything else related to the property, caused by themselves or their guests and companions.
          
          Damages found before or during the rental period shall be reported immediately.
          
          Guests shall be responsible for any fines that may occur due to violation of any law, convention or internal regulation of the condominium in which the house is located. Payment of the fine shall be made before check-out, as soon as homeowners are notified as to the motive and amount of the fine.`,
          price: 780.0,
          previewImage: true
        },
        {
          userId: 3,
          address: "Calle Santo Domingo",
          city: "Tamarindo",
          state: "GN",
          country: "Costa Rica",
          lat: 10.2993,
          lng: -85.8400,
          name: "Beach Front Estate",
          description: `An extraordinary multi-level estate with a blend of contemporary style and amenities and a stunning setting overlooking the rainforest and the Pacific Ocean awaits. Great Estate to spend with friends and family for an incredible escape. Enjoy panoramic views of the Pacific, the mountains, and the rainforest from your elevated vantage point. The house features seven luxurious bedrooms and spa baths span five levels with just under 14,000 sq ft of indoor and outdoor living spaces - Enjoy!
          The space
          The house features seven luxurious bedrooms and spa baths span five levels with just under 14,000 square feet of indoor and outdoor living spaces, giving more than ample space to enjoy together or have space to spread out. The expansive outdoor entertaining area offers something for every mood: spots to soak up the sun, cook and dine together, sip cocktails in the bar area, have your morning coffee amongst the palms, or watch the sunset around the fire with loved ones. The glass-surrounded game room or the luxurious 12 seat movie theater are ideal spots to shelter from the rain. Indoors and out, this property brings people together in a truly unique ecosystem.
          
          This estate is located in the Nativa Resort, a lush, gated enclave on the Central Pacific coast of Costa Rica, just a 20-minute drive from Jaco Beach, a charming beach town known for surfing and nightlife. The house is located 15 minutes north of Los Suenos and is only 50 minutes to SJO - San Jose Airport.
          
          For Nature lovers, you can often Spot a scarlet macaw flying in the vista and you are close to Bijuagual Waterfall in the Pura Vida Gardens.
          
          Chef services can be arranged and a full time driver!`,
          price: 195.0,
          previewImage: true,
        },
        {
          userId: 4,
          address: "420 Pelican Bay Drive",
          city: "Marigot",
          state: "Saint Martin",
          country: "MF",
          lat: 18.092268532436496,
          lng: -63.029259899052015,
          name: "Hope Hill St. Martin",
          description: `Located on the heights of Orient Bay, Villa Karukera offers a breathtaking 180° view of Orient Bay, Anguilla and St. Barts in the distance.

          This beautiful, recently renovated, contemporary 4 bedroom villa is the perfect place to vacation in St. Martin and enjoy the island life.
          
          The villa’s beautiful outdoor spaces open to a free-form infinity pool, a large open deck with plenty of room for poolside sunbathing and a gazebo with a sitting area to enjoy the cool island breeze and views.
          The space
          Amenities & Services :
          
          • Ocean view & Sunrise
          • Short drive to beach – 5 minutes
          • Pool
          • Air Conditionned
          • TV
          • Free Wi-Fi internet access
          • Equipped kitchen
          • Interior accessed bedrooms
          • BBQ
          • Safe
          • Washer/Dryer
          
          The villa’s beautiful outdoor spaces open to a free-form infinity pool, a large open deck with plenty of room for poolside sunbathing, and a gazebo with a sitting area to enjoy the cool island breeze and views of our smaller neighboring islands, Green Cay, Pinel and Tintamarre.
          
          A covered outdoor dining area, located just steps from the kitchen, is perfect for enjoying al fresco lunches or dinners during cozy times with family and friends. The beautiful entryway leads to a spacious air-conditioned, open living and dining area with views of the pool and ocean. With ample seating, this great room is ideal for spending time with friends and family, as well as entertaining.
          
          The villa has a fully equipped kitchen with an island where you can prepare your meals or have them prepared by one of our recommended chefs, while enjoying a beautiful ocean view.
          
          The master bedroom opening to the pool has a king-size bed, an ensuite bathroom with an outdoor shower and a small heated pool . The other two poolside bedrooms each have a king-size bed, an ensuite-bathroom with an outdoor shower. The fourth bedroom, located in a separate bungalow, a few steps away from the main house, offers a lot of privacy and beautiful ocean view. It features a king size bed, an ensuite bathroom, its own terrace and a small kitchenette.
          
          The villa is ideal for families and couples, with the space and comfort to sit and relax while enjoying the sun and island life. Although secluded, you are only a 3 minute drive to the famous Orient Bay beach, restaurants, bars and stores. You are also a short drive from the fantastic culinary scene of Grand Case, or the beautiful beach of Anse Marcel.`,
          price: 110.0,
          previewImage: null
        },
        {
          userId: 5,
          address: "19 Av Eiffel",
          city: "Paris",
          state: "IDF",
          country: "France",
          lat: 48.8566,
          lng: 2.3522,
          name: "Romantic Paris Getaway",
          description:
            `Located on the 5th floor, by staircase, a superb Haussmannian building, the apartment is a beautiful entrance leading to a bright and spacious living room. You will find a kitchen furnished and equipped to prepare your meals, as well as a comfortable master bedroom. The second bedroom, located at the back of the living room, offers extra privacy and is accompanied by its own bathroom.

            Enjoy the balcony with its open views of the Parisian rooftops and the famous Rue de Rivoli, ideal for having your coffee in the morning.
            
            The exposed beams and parquet flooring point of Hungary add a touch of elegance and character to the apartment.
            
            Only the living room is air conditioned. The apartment is 81 m2 and the building does not have an elevator.
            Other things to note
            Located in Paris's 1st arrondissement, our apartment has an exceptional location in the heart of the city. You'll be literally surrounded by the history and culture of Paris. A short walk away is the famous Tour Saint-Jacques and the magnificent Musée du Louvre.
            
            The neighborhood is also full of iconic sites such as the Centre Pompidou and Ile de la Cité with Notre-Dame Cathedral, within walking distance. You will also be very close to the Marais district with its bars and shops.`,
          price: 557.0,
          previewImage: null,
        },
        {
          userId: 4,
          address: "234 Tokyo St",
          city: "Tokyo",
          state: "Kanto",
          country: "Japan",
          lat: 35.6895,
          lng: 139.6917,
          name: "Tokyo Dojo",
          description: "Samurai Dojo converted into 3 bed 2 bath.",
          price: 260.0,
          previewImage: null,
        },
        {
          userId: 5,
          address: "45 Sidney St",
          city: "Sydney",
          state: "NSW",
          country: "Australia",
          lat: -33.8688,
          lng: 151.2093,
          name: "Sydney Harbor View",
          description:
            "Spacious 2 bedroom apartment overlooking Sydney Harbor.",
          price: 445.0,
          previewImage: null,
        },
        {
          userId: 1,
          address: "123 Maple St",
          city: "Chicago",
          state: "IL",
          country: "USA",
          lat: 41.8781,
          lng: -87.6298,
          name: "Windy City Apartment",
          description: "Located in the heart of Chicago near all the eateries.",
          price: 300.0,
          previewImage: null,
        },
        {
          userId: 2,
          address: "789 Coconut Rd",
          city: "Maui",
          state: "HI",
          country: "USA",
          lat: 21.3069,
          lng: -157.8583,
          name: "Hawaii Dream",
          description: `Along the 6 mile stretch of golden sand that separates Maui’s Kihei region from the great blue Pacific Ocean, you’ll find your own slice of paradise: Kamaole Villa. The three bedroom home sits right up against sandy shores giving you instant access to Kamaole Beach, as well as luxurious amenities found on-site.

          A lush hedgerow lends privacy to the main terrace, where a beautiful blue pool runs the width of the property. A separate plunge pool and bubbling hot tub provide ideal settings for relaxing with a cocktail or enjoying an unforgettable sunset. To make the most of the Hawaiian sun, recline in a chaise longue or pack your towel and head for the beach. The traditional lanai veranda is tiled with natural stone and features cushioned lounge sets, barbecue, an al fresco dining table and bar within its columned shelter.
          
          In the spacious great room, you’ll find the living room, gourmet kitchen and dining room all set amid an ambiance of modern refinement. Ceiling fans hang from a wood paneled ceiling and circulate air that pours in through immense retractable walls. You’ll still feel like you’re outdoors as you ease into a plush sofa and watch a movie on a TV housed in a custom-built entertainment cabinet. In the kitchen, guests can sit in raised seats around the breakfast bar and chat as you test your culinary skills on high end appliances and granite surfaces. The gorgeous wood dining table will seat up to eight people.
          
          The three air conditioned bedrooms are individually styled with carefully selected furnishings and linens that reflect taste and tradition. The Primary bedroom features a King size bed and has its own spacious en-suite bathroom with bathtub and walk-in rain shower. The second and third bedrooms each have access to well appointed bathrooms, and the latter contains two Twin beds, making it ideal for children.
          
          Kamaole Villa puts you within walking distance of town, where you’ll find shops and restaurants. The main grocery store can be reached in five minutes by car. There are also two golf clubs within ten minutes of the house. Kihei’s shoreline reefs create spectacular snorkeling and kayaking experiences and North, in Maalaea Bay you can view endangered species in national parks or organize whale watching tours.`,
          price: 600.0,
          previewImage: null,
        },
        {
          userId: 3,
          address: "890 Elm St",
          city: "San Francisco",
          state: "CA",
          country: "USA",
          lat: 37.7749,
          lng: -122.4194,
          name: "Sea Cliff Enclave",
          description: "Great views of the Golden Gate Bridge.",
          price: 575.0,
          previewImage: null,
        },
        {
          userId: 4,
          address: "567 Oak Blvd",
          city: "Atlanta",
          state: "GA",
          country: "USA",
          lat: 33.749,
          lng: -84.388,
          name: "Southern Comfort",
          description: `This house is spectacular and very private! Four bedrooms three full bathrooms upstairs and two half bathrooms downstairs makes this the perfect house for large groups. The master suite is nothing short of stunning! It over looks the pool and jacuzzi. has its own private balcony. There is a par 3 golf course across the street and Bobby Jones golf course 2.5 miles away. The property is bordered to the W and S by Peachtree Creek. There is a large covered outdoor porch with a fire place.
          The space          
          Each of the bedrooms have a large HD smart TV, we have Direct TV Stream. A $300 fully refundable deposit may be charged. This is.for excessive cleaning, damages to the property or it’s contents, and most importantly any smoking inside the home or any in authorized parties or gatherings. The pool is heated to extend the season. Most people do not find the weather conducive for winter swimming. I do leave the pool open year round for beauty, if you would like if heated in the winter I can run the heater 24 hours a day for an extra charge of $75 a beginning on the day that you would like me to fire up the heather. The jacuzzi is NEW (Dec 2019) and seats 5 to six people. It had a lounger chair, foot jets and a blue tooth speaker. The glass doors in the living room are fixed doors, they do not open and close so please do not try. There are two outdoor gas heaters, if you would like to use them you can refill the gas tanks at ace hardware 2 miles away for $20 each, this is the same with the gas grill. There is no alarm or sound system. Please bring a Bluetooth speaker, no large speakers. The pictures were taken in the spring, plants are not in bloom during late fall and winter. The garage is locked, I keep my boat and second car in the garage. If you check out on Sunday or Monday you will need to take the trash to the street, trash pick up is early Monday morning. Please read the reviews I have left for others as well as those left for me, I always post a negative review for any sort of smoking inside the house, cigarette, hookah and pot smoking. Please do not book if anyone at the house will be smoking inside`,
          price: 350.0,
          previewImage: null,
        },
        {
          userId: 5,
          address: "908 Pine Rd",
          city: "Vancouver",
          state: "BC",
          country: "Canada",
          lat: 49.3520,
          lng: -123.2000,
          name: "Canadian Wilderness",
          description: "Close to ski resorts and hiking trails.",
          price: 180.0,
          previewImage: null,
        },
        {
          userId: 1,
          address: "Ognam Gongnnan lane",
          city: "Seoul",
          state: "Seoul",
          country: "South Korea",
          lat: 37.5665,
          lng: 126.9780,
          name: "Authentic South Korean Retreat",
          description: `Our accommodation has changed the 105-year-old traditional hanok house to be convenient for modern life with a new sensibility. The advantage of our accommodation is that it is located on Main Road Street, where Hanok Village attractions and famous restaurants are located, and Hanbok, uniforms.Gyeongseong Award. We will help guide you when taking photos, and our accommodation is a great place for events, and it is an emotional space where couples, or solo travelers, business travelers, friends, and families can heal.`,
          price: 203.0,
          previewImage: null,
        },
        {
          userId: 2,
          address: "78 Sahara St",
          city: "Cairo",
          state: "CA",
          country: "Egypt",
          lat: 30.0444,
          lng: 31.2357,
          name: "Pyramids View",
          description: `Welcome at the utmost iconic listing in Cairo!
          Yes! view and pictures are all 100% real. (Be sure to check out our other listings too)
          Indulge in a stunning view of all the Giza Pyramids from anywhere within this contemporary oriental studio or while relaxing in the Jacuzzi. It is also a 5 min walk from the Pyramids entrance gate. To make the most of your trip, make sure to check out our experiences!`,
          price: 88.0,
          previewImage: null,
        },
        {
          userId: 3,
          address: "1000 Bel Air Road",
          city: "Los Angeles",
          state: "CA",
          country: "USA",
          lat: 34.0822,
          lng: -118.4450,
          name: "Fresh Prince of Bel Air",
          description: `Situated in coveted lower Sunset Plaza in West Hollywood just above the Sunset strip, this stunning and newly remodeled home offers an open floor plan, vaulted ceilings, separate guest apartment (4th bdrm) and designer finishes throughout. Great for entertaining, retreat, relaxation or family getaways. The home is furnished with chic high end furnishings.`,
          price: 420.0,
          previewImage: null,
        },
        {
          userId: 5,
          address: "23 Copacabana Av",
          city: "Rio de Janeiro",
          state: "RJ",
          country: "Brazil",
          lat: -22.9656,
          lng: -43.1783,
          name: "Copacabana Palace",
          description: "Cliffside house near the famous Copacabana beach.",
          price: 605.0,
          previewImage: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    await queryInterface.bulkDelete(options, null, {});
  },
};
