const express = require("express");
const { Spot, SpotImage, Review, User, ReviewImage } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");
let { Sequelize } = require('sequelize');
const newError = require("../../utils/newError");
const router = express.Router();


//Get Reviews of Current User
router.get("/current", requireAuth, async (req, res)=>{
    let userId = req.user.id
    const reviews = await Review.findAll( {
        where: {
            userId: userId
        }

    });
    res.json(reviews)
})


router.post("/:reviewId/images", requireAuth, async (req,res, next)=> {
        const reviewId = req.params.reviewId
        const { url } = req.body

        if (!await Review.findByPk(reviewId)) {
            const err = new Error("Review couldn't be found");
            err.status = 404;
            err.title = 'Review not Found';
            err.errors = [" 404: Provided reviewId not found"];
            return next(err);
        }
        const reviewImg = await SpotImage.create({
                reviewId,
                url
        })

        res.json({message: "review Image added", reviewImg})
})



module.exports = router;