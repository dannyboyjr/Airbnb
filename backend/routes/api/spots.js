const express = require("express");
const { Spot, SpotImage, Review, User } = require('../../db/models');
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
            // include: [
            //     [Sequelize.fn('COUNT', Sequelize.col('Reviews.stars')), 'numReviews'],
            //     [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgStarRating'],
            // ],
            exclude: ["previewImage"],
        },
    })

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
            userId,
            spotId
        }
    })

    if(reviewAlreadyExists){
        const err = new Error("User already Posted");
        err.status = 403;
        err.title = 'Unauthroized';
        err.errors = [" 403: User already posted review for this spot"];
        return next(err);
    }
 // post review for spot
    const newReview = await Review.create({
        userId,
        spotId,
        review,
        stars
    })

    res.json({message: "Review submitted!", newReview})

})




module.exports = router;