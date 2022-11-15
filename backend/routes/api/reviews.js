const express = require("express");
const { Spot, SpotImage, Review, User, ReviewImage } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");
let { Sequelize } = require('sequelize');
const newError = require("../../utils/newError");
const router = express.Router();


//Get Reviews of Current User
router.get("/current", requireAuth, async (req, res)=>{
    let user = req.user.toSafeObject()
    const reviews = await Review.findAll( {
        where: {
            userId: user.id
        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"],
            },
            {
                model: Spot,
                attributes: [ "id", "userId", "address", "city", "state", "country", "lat", "lng", "name","price"],
            },{
                model: ReviewImage
            },
        ],

    });
    res.json(reviews)
})

//post reviews image based on reviewId
router.post("/:reviewId/images", requireAuth, async (req,res, next)=> {
        const reviewId = parseInt(req.params.reviewId)
        const { url } = req.body
    //MAKE DRY
        if (!await Review.findByPk(reviewId)) {
            const err = new Error("Review couldn't be found");
            err.status = 404;
            err.title = 'Review not Found';
            err.errors = [" 404: Provided reviewId not found"];
            return next(err);
        }
        const reviewImg = await ReviewImage.create({
                reviewId,
                url
        })

        res.json({message: "review Image added", reviewImg})
})


//edit review
router.put("/:reviewId", requireAuth, async (req, res, next)=>{
    const reviewId = parseInt(req.params.reviewId)
    const userAuth = req.user.id
    const { review, stars } = req.body
    
    const editReview = await Review.findByPk(reviewId)
    //MAKE DRY
    if (!editReview) {
        const err = new Error("Review couldn't be found");
        err.status = 404;
        err.title = 'Review not Found';
        err.errors = [" 404: Provided reviewId not found"];
        return next(err);
    }
    //MAKE DRY 
    if (userAuth != editReview.dataValues.userId) {
        const err = new Error("Not your comment. ");
        err.status = 404;
        err.title = 'UnAuthorized';
        err.errors = [" 404: Not Authorized"];
        return next(err);
    }

    await editReview.update({
        review,
        stars
    })
    res.json(editReview)
})





module.exports = router;