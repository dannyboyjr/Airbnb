const express = require("express");
const { Spot, Review, User, ReviewImage } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");
let { Sequelize } = require('sequelize');
const newError = require("../../utils/newError");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
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

    const pictureUrlValidator = [ 
        check("url")
            .isURL()
            .withMessage("must be a URL"),
        handleValidationErrors
    ]

//post reviews image based on reviewId
router.post("/:reviewId/images", requireAuth, pictureUrlValidator, async (req,res, next)=> {
        const reviewId = parseInt(req.params.reviewId)
        const { url } = req.body

    //MAKE DRY
        if (!await Review.findByPk(reviewId)) {
            const err = new Error("Review couldn't be found");
            err.status = 404;
            err.title = 'Review not Found';
            err.errors = ["Provided reviewId not found"];
            return next(err);
        }

        let images = await Review.findByPk(reviewId, {
            include: [{
                model: ReviewImage,
            }],
        })
        const totalImageCount  = images.dataValues.ReviewImages.length 

        if(totalImageCount > 10){
            const err = new Error("Maximum number of images for this resource was reached");
            err.status = 403;
            err.title = 'Review not Found';
            err.errors = ["Maximum number of images for this resource was reached. must be under 10"];
            return next(err);
        }


        const reviewImg = await ReviewImage.create({
                reviewId,
                url
        })

        res.json({message: "review Image added", reviewImg })
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
        err.errors = ["Provided reviewId not found"];
        return next(err);
    }
    //MAKE DRY 
    if (userAuth != editReview.dataValues.userId) {
        const err = new Error("Not your comment. ");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["404: Not Authorized"];
        return next(err);
    }

    await editReview.update({
        review,
        stars
    })
    res.json(editReview)
})

//Delete Review
router.delete("/:reviewId", requireAuth, async (req, res, next)=>{
    const reviewId = parseInt(req.params.reviewId)
    const userAuth = req.user.id
    
    const doomedReview = await Review.findByPk(reviewId)
    //MAKE DRY
    if (!doomedReview) {
        const err = new Error("Review couldn't be found");
        err.status = 404;
        err.title = 'Review not Found';
        err.errors = ["Provided reviewId not found"];
        return next(err);
    }
    //MAKE DRY 
    if (userAuth != doomedReview.dataValues.userId) {
        const err = new Error("Unable to Delete. Not your Review.");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["Not Authorized"];
        return next(err);
    }

    await doomedReview.destroy()
    res.json({message: "Review successfully deleted."})
})


//delete review image
router.delete("/:reviewId/images/:imageId", requireAuth, async (req, res, next)=>{
    const reviewId = parseInt(req.params.reviewId)
    const imageId = parseInt(req.params.imageId)
    const userAuth = req.user.id

    const review = await Review.findByPk(reviewId)
    const doomedReviewImage = await ReviewImage.findByPk(imageId)
    //MAKE DRY
    if (!doomedReviewImage || !review) {
        const err = new Error("Review image couldn't be found");
        err.status = 404;
        err.title = 'Review not Found';
        err.errors = ["Provided reviewId not found"];
        return next(err);
    }
    //MAKE DRY 
    if (userAuth != review.dataValues.userId) {
        const err = new Error("Unable to Delete. Not your Review.");
        err.status = 403;
        err.title = 'Unauthorized';
        err.errors = ["Not Authorized"];
        return next(err);
    }

    await doomedReviewImage.destroy()
    res.json({message: "Review image successfully deleted."})
})

module.exports = router;