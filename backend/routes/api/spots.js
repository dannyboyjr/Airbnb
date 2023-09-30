const express = require("express");
const { Spot, SpotImage, Review, User, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require("../../utils/auth")
let { Sequelize , Op} = require('sequelize');
const newError = require("../../utils/newError")
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require("../../utils/auth.js")


const router = express.Router();



const queryValidator = [
    check('page')
        .optional().isInt({ min: 0, max: 10 })
        .withMessage('Page must be greater than or equal to 0 or less than or equal to 10'),
    check('size')
        .optional().isInt({ min: 0, max: 20 })
        .withMessage('"Size must be greater than or equal or less than or equal to 20"'),
    check('maxLat')
        .optional().isDecimal()
        .withMessage('Maximum latitude is invalid'),
    check('minLat')
        .optional().isDecimal()
        .withMessage('Minimum latitude is invalid'),
    check('minLng')
        .optional().isDecimal()
        .withMessage('Minimum longitude is invalid'),
    check('maxLng')
        .optional().isDecimal()
        .withMessage('Maximum longitude is invalid'),
    check('minPrice')
        .optional().isDecimal({ min: 0 })
        .withMessage('Minimum price must be greater than or equal to 0'),
    check('maxPrice')
        .optional().isDecimal({ min: 0 })
        .withMessage('Maximum price must be greater than or equal to 0'),
    handleValidationErrors
];



//get all spots
router.get("/", queryValidator, async (req, res) => {

    let page = req.query.page
    let size = req.query.size
    let { minPrice, maxPrice } = req.query

    page = parseInt(page) || 1;
    size = parseInt(size) || 20;

    const pagination = {}
    const where = {}

    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    const spots = await Spot.findAll({

        include: [
            {
                model: Review,
            },
            {
                model: SpotImage
            },
        ],

        ...pagination
    })
        //MAKE DRY
    if (!spots) {
        const err = new Error("Spots could not be found");
        err.status = 404;
        err.title = "Error";
        err.errors = ["Spot could not be found"];
        return next(err);
    }


    spots.forEach((spot) => {
        const totalReviews = spot.dataValues.Reviews.length
        spot.dataValues.totalReviews = totalReviews

        const sum = spot.dataValues.Reviews.reduce((prev, curr) => {
            return prev + curr.stars
        }, 0)

        spot.dataValues.averageStars = sum / totalReviews
        delete spot.dataValues.Reviews

    })


    res.json({ spots, page, size })

});




const spotChecker = [
    check("name")
        .isByteLength({ min: 1, max: 49 })
        .withMessage("Name is required"),
    check("description")
        .isByteLength({ min:1, max: 20000})
        .withMessage("Description is required"),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),
    check('lat')
        .isDecimal()
        .withMessage('Latitude is not valid'),
    check('lng')
        .isDecimal()
        .withMessage(' longitude is invalid'),
    check('price')
        .isDecimal({ min: 0 })
        .withMessage('Minimum price must be greater than or equal to 0'),

    handleValidationErrors
];



//create spot
router.post("/", requireAuth, spotChecker, async (req, res) => {

    const { address, city, state, country, lat, lng, name, description, price } = req.body

    const newSpot = await Spot.create({
        userId: req.user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    res.json({ message: "Spot successfully added", newSpot })
})


// Get all Spots owned by the current User
router.get("/current", requireAuth, async (req, res) => {
    const { user } = req
    const currentUserId = user.toSafeObject().id
    const spots = await Spot.findAll({
        where: {
            userId: currentUserId
        }
    })

    res.json(spots)

});

// get spot by id (excluding previewImage)
router.get("/:spotId", async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)

    if (!await Spot.findByPk(spotId)) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'Spot not Found';
        err.errors = ["Provided SpotId not found"];
        return next(err);
    }

    const spot = await Spot.findByPk(spotId, {

        include: [{
            model: Review,
            // attributes: [],
        },
        
        {
            model: SpotImage,
        },
        {
            model: User,
            attributes: ["id", "firstName", "lastName"],
        },
        ],

        attributes: {
            exclude: ["previewImage"],
        },
    })

    if (!spot) {
        const err = new Error("Spots could not be found");
        err.status = 404;
        err.title = "Error";
        err.errors = ["Spot could not be found"];
        return next(err);
    }
    

    const totalReviews = spot.dataValues.Reviews.length
    spot.dataValues.totalReviews = totalReviews

    const sum = spot.dataValues.Reviews.reduce((prev, curr) => {
        return prev + curr.stars
    }, 0)

    spot.dataValues.averageStars = sum / totalReviews
    res.json(spot)

})



//edit spot by Id (excluding imagePreview)
router.put("/:spotId", requireAuth, spotChecker, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const { address, city, state, country, lat, lng, name, description, price } = req.body

    let spot = await Spot.findByPk(spotId, {
        attributes: {
            exclude: ["previewImage"],
        }
    })

    if (!spot) {
        const err = new Error("Spot could not be edited");
        err.status = 404;
        err.title = 'Error';
        err.errors = ["Spot could not be edited"];
        return next(err);
    }

    await spot.update({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    res.json(spot)


})



router.delete("/:spotId", requireAuth, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const userAuthId = req.user.id
    const doomedSpot = await Spot.findByPk(spotId);

    //MAKE DRY
    if (!doomedSpot) {
        const err = new Error("Spot could not be found");
        err.status = 404;
        err.title = "Unauthorized";
        err.errors = ["Spot could not be found"];
        return next(err);
    }

    //MAKE DRY (also one of these in reviews)
    if (userAuthId != doomedSpot.dataValues.userId) {
        const err = new Error("Cannot Delete. Not your booking!");
        err.status = 403;
        err.title = 'UnAuthorized';
        err.errors = ["Not Authorized"];
        return next(err);
    }



    await doomedSpot.destroy()

    res.json({ message: "Spot successfully deleted" })
})

const pictureUrlValidator = [
    check("url")
        .isURL()
        .withMessage("must be a URL"),
    handleValidationErrors
]

//Create an image for a spot
router.post('/:spotId/images', requireAuth, pictureUrlValidator, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const userAuthId = req.user.id
    const { url, previewImage } = req.body
    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'SpotImage upload Failed';
        err.errors = ["Provided SpotId not found"];
        return next(err);
    }

    if (userAuthId != spot.dataValues.userId) {
        const err = new Error("Cannot post image. Not your Spot!");
        err.status = 403;
        err.title = 'Unuthorized';
        err.errors = ["Not authorized"];
        return next(err);
    }


    let images = await Spot.findByPk(spotId, {
        include: [{
            model: SpotImage,
        }],
    })
    const totalImageCount = images.dataValues.SpotImages.length

    if (totalImageCount > 9) {
        const err = new Error("Maximum number of images for this resource was reached");
        err.status = 403;
        err.title = 'Review not Found';
        err.errors = ["Maximum number of images for this resource was reached. must be under 10"];
        return next(err);
    }




    const addImage = await SpotImage.create({
        spotId,
        url,
        preview: previewImage
    })
    
    res.json({ message: "Image added successfully", addImage })
})


//Get Reviews of current spot
router.get("/:spotId/reviews", async (req, res, next) => {
    let spotId = parseInt(req.params.spotId)

    if (!await Spot.findByPk(spotId)) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'Spot not Found';
        err.errors = ["Provided SpotId not found"];
        return next(err);
    }

    const reviews = await Review.findAll({
        where: {
            spotId,

        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"],
            },
            {
                model: ReviewImage
            },
        ],

    });


    res.json(reviews)
})


const createReviewValidator = [

    check("review")
        .exists({ checkFalsy: true })
        .isByteLength({ min: 0, max: 1000 })
        .withMessage("Review text must be a string under 200 charaters"),
    check("stars")
        .isInt({ min: 1, max: 5 })
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
]
//Create a Review for a Spot
router.post("/:spotId/reviews", requireAuth, createReviewValidator, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const userId = req.user.toSafeObject().id
    const { review, stars } = req.body
    const spot = await Spot.findByPk(spotId)

    //Error if spot not found
    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'No spot found';
        err.errors = ["Provided spot not found"];
        return next(err);
    }
    
    if(userId == spot.userId){
        const err = new Error("Cannot post review on your own spot!");
        err.status = 403;
        err.title = 'Unauthroized';
        err.errors = [ `Unable to post review on a spot you own`];
        return next(err);
    }

    //error if user already posted review to spot
    const reviewAlreadyExists = await Review.findOne({
        where: {
            userId: userId,
            spotId: spotId
        }
    })


    if(reviewAlreadyExists){
        const err = new Error("User has already submitted review!");
        err.status = 403;
        err.title = 'Unauthroized';
        err.errors = [ `already posted review for this spot`];
        return next(err);
    }

   

    // post review for spot
    const newReview = await Review.create({
        userId,
        spotId,
        review,
        stars
    })

    res.json({ message: "Review submitted!", newReview })

})

//delete spot image

router.delete("/:spotId/images/:imageId", requireAuth, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const spotImageId = parseInt(req.params.imageId)
    const userAuthId = req.user.id

    const spot = await Spot.findByPk(spotId);
    const doomedSpotImage = await SpotImage.findByPk(spotImageId);

    //MAKE DRY
    if (!doomedSpotImage) {
        const err = new Error("Spot image could not be found");
        err.status = 404;
        err.title = "Unauthorized";
        err.errors = ["Spot image could not be found"];
        return next(err);
    }

    //MAKE DRY (also one of these in reviews)
    if (userAuthId != spot.dataValues.userId) {
        const err = new Error("Cannot Delete. Not your Spot!");
        err.status = 403;
        err.title = 'Unuthorized';
        err.errors = ["Not authorized"];
        return next(err);
    }

    await doomedSpotImage.destroy()

    res.json({ message: "Spot image successfully deleted" })
})



//BOOKINGS ROUTES 

router.post("/:spotIdForBooking/bookings", requireAuth, async (req, res, next) => {
    const spotId = parseInt(req.params.spotIdForBooking);
    const userId = req.user.toSafeObject().id;
    const { startDate, endDate } = req.body;

    //user cannot book on own spot
    const spot = await Spot.findOne({
        where: {
            id: spotId

        }
    })
    //MAKE DRY
    if (!spot) {
        const err = new Error("Spot doesn't exist!");
        err.status = 404;
        err.title = 'Unauthorized';
        err.errors = ["Provided spot not found"];
        return next(err);
    }
    if (spot.userId === userId) {
        //MAKE DRY
        const err = new Error("Cannot book your own spot!");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["Cant book own spot"];
        return next(err);
    }

    const currentBookings = await Booking.findOne({
        where: {
            [Op.or]: [
                { startDate: { [Op.between]: [startDate, endDate] } },
                { endDate: { [Op.between]: [startDate, endDate] } },
                {
                    [Op.and]: [
                        { startDate: { [Op.lt]: startDate } },
                        { endDate: { [Op.gt]: endDate } },
                    ],
                },
            ],
        },
    })

    if (currentBookings) {
        const err = new Error("Dates already have booking!");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["Booking dates unavailabe"];
        return next(err);
    }
    const createBooking = await Booking.create({
        spotId,
        userId,
        startDate,
        endDate

    })



    res.json({ message: "Booking Success!", createBooking })

})


//Get all Bookings for a Spot By Id
router.get("/:spotId/bookings", async (req, res, next) => {
    let spotId = req.params.spotId;
    let userId = req.user ? req.user.id : null;
    let spot = await Spot.findByPk(spotId);
  
    if (!spot) {
      const err = new Error("Spot couldn't be found!");
      err.status = 404;
      err.title = 'Unauthorized';
      err.errors = ["Provided spot not found"];
      return next(err);
    }
  
    let attributesToInclude = ['id', 'spotId', 'startDate', 'endDate', 'createdAt', 'updatedAt'];
    if (userId && userId === spot.userId) {
      attributesToInclude.push('userId');
    }
  
    const spotBookings = await Booking.findAll({
      where: {
        spotId: spotId
      },
      attributes: attributesToInclude
    });
  
    res.json(spotBookings);
  });
  




module.exports = router;