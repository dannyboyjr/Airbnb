const express = require("express");
const { Spot, SpotImage } = require('../../db/models');


const router = express.Router();

//get all spots
router.get("/", async (req, res)=>{
    const spots = await Spot.findAll()
    
    res.json(spots)

});

//create spot
router.post("/", async (req, res)=> {

    const {address, city, state, country, lat ,lng, name, description } = req.body

    const newSpot = await Spot.create({
        userId: req.user.id,
        address, 
        city, 
        state, 
        country, 
        lat,
        lng, 
        name, 
        description
    })
    res.json({message: "Spot successfully added", newSpot})
})

//Create an image for a spot
router.post('/:spotId/images', async (req, res)=>{
    const spotId = parseInt(req.params.spotId)
    const {url, previewImage} = req.body

    const addImage = await SpotImage.create({
        spotId,
        url,
        previewImage
    })
    res.json({message: "Image added successfully", addImage})
})


module.exports = router;