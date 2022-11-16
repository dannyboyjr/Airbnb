const express = require("express");
const { Spot, SpotImage, Review, User, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require("../../utils/auth")
let { Sequelize } = require('sequelize');
const newError = require("../../utils/newError")


const router = express.Router();

//get all spots
router.get("/", async (req, res) => {
    const spots = await Spot.findAll()

    res.json(spots)

});

//create spot
router.post("/", async (req, res) => {

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
router.get("/current", async (req, res) => {
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
        err.errors = [" 404: Provided SpotId not found"];
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

    const totalReviews  = spot.dataValues.Reviews.length
    spot.dataValues.totalReviews = totalReviews

    const sum = spot.dataValues.Reviews.reduce((prev, curr) =>{
        return prev + curr.stars
    }, 0) 

    spot.dataValues.averageStars = sum/totalReviews
    res.json(spot)

})


//edit spot by Id (excluding imagePreview)
router.put("/:spotId", async (req, res, next)=>{
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
        err.title = 'Spot not found maybe??';
        err.errors = [" 404: Spot could not be edited"];
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



router.delete("/:spotId", requireAuth, async (req, res, next) =>{
    const spotId = parseInt(req.params.spotId)
    const userAuthId = req.user.id
    const doomedSpot = await Spot.findByPk(spotId);

    //MAKE DRY
    if (!doomedSpot) {
        const err = new Error("Spot could not be found");
        err.status = 404;
        err.title = "Unauthorized";
        err.errors = [" 404: Spot could not be found"];
        return next(err);
    }

    //MAKE DRY (also one of these in reviews)
    if (userAuthId != doomedSpot.dataValues.userId) {
        const err = new Error("Cannot Delete. Not your booking!");
        err.status = 403;
        err.title = 'UnAuthorized';
        err.errors = [" 404: Not Authorized"];
        return next(err);
    }

    

    await doomedSpot.destroy()

    res.json({message: "Spot successfully deleted"})
})










//Create an image for a spot
router.post('/:spotId/images', async (req, res, next) => {
    const spotId = parseInt(req.params.spotId)
    const { url, previewImage } = req.body
    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'SpotImage upload Failed';
        err.errors = [" 404: Provided SpotId not found"];
        return next(err);
    }



    const addImage = await SpotImage.create({
        spotId,
        url,
        previewImage
    })
    res.json({ message: "Image added successfully", addImage })
})


//Get Reviews of current spot
router.get("/:spotId/reviews", async (req, res, next)=>{
    let spotId = parseInt(req.params.spotId)

    if (!await Spot.findByPk(spotId)) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'Spot not Found';
        err.errors = [" 404: Provided SpotId not found"];
        return next(err);
    }

    const reviews = await Review.findAll( {
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


//Create a Review for a Spot
router.post("/:spotId/reviews", requireAuth, async (req, res, next)=>{
    const spotId = parseInt(req.params.spotId)
    const userId = req.user.toSafeObject().id
    const { review, stars } = req.body

    //Error if spot not found
    if(!await Spot.findByPk(spotId)){
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = 'No spot found';
        err.errors = [" 404: Provided spot not found"];
        return next(err);
    }
    //error if upser already posted review to spot
    const reviewAlreadyExists = await Review.findAll({
        where:{
            userId: userId,
            spotId: spotId
        }
    })

    // if(reviewAlreadyExists){
    //     const err = new Error("User already Posted");
    //     err.status = 403;
    //     err.title = 'Unauthroized';
    //     err.errors = [ `403: UserId: ${userId} already posted review for this spot`];
    //     return next(err);
    // }
 // post review for spot
    const newReview = await Review.create({
        userId,
        spotId,
        review,
        stars
    })

    res.json({message: "Review submitted!", newReview})

})



//BOOKINGS ROUTES 




router.post("/:spotIdForBooking/bookings", requireAuth, async (req, res, next)=>{
    const spotId = parseInt(req.params.spotIdForBooking);
    const userId = req.user.toSafeObject().id;
    const { startDate, endDate } = req.body;

    //user cannot book on own spot
    const spot = await Spot.findOne({
        where:{
            id: spotId

        }
    })
    //MAKE DRY
    if(!spot){
        const err = new Error("Spot doesn't exist!");
        err.status = 404;
        err.title = 'Unauthorized';
        err.errors = ["Provided spot not found"];
        return next(err);
    }
    if(spot.userId === userId){
        //MAKE DRY
        const err = new Error("Cannot book your own spot!");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["Cant book own spot"];
        return next(err);
    }

    const createBooking = await Booking.create({
        spotId,
        userId,
        startDate,
        endDate

    })



    res.json({message: "Booking Success!", createBooking})

})


//Get all Bookings for a Spot By Id
router.get("/:spotId/bookings", requireAuth, async (req, res, next) => {
    let spotId = req.params.spotId

    //MAKE DRY
    if(!await Spot.findByPk(spotId)){
        const err = new Error("Spot doesn't exist!");
        err.status = 404;
        err.title = 'Unauthorized';
        err.errors = ["Provided spot not found"];
        return next(err);
    }

    const spotBookings = await Spot.findByPk(spotId, {
        include: [
            {model: Booking}
        ]
    });
    
    res.json(spotBookings)
})




module.exports = router;