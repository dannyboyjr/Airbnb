const express = require("express");
const { Booking, Spot } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");

const router = express.Router();


router.get("/current", requireAuth, async (req,res)=>{
    let userId = req.user.id

    const userBookings = await Booking.findAll({
        where: {
            userId: userId
        },
        include: [
            {
                model: Spot
            },
            
        ],
    });
    res.json(userBookings)
});







module.exports = router;