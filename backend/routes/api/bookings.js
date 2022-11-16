const express = require("express");
const { Booking, Spot } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");

const router = express.Router();

//Get All Bookings based off current user
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


//Edit a booking 

router.put("/:bookingId", requireAuth, async (req, res, next) =>{
    const bookingId = req.params.bookingId;
    const { startDate, endDate } = req.body
    const userAuth = req.user.id

    const editBooking = await Booking.findByPk(bookingId);

    // MAKE DRY 
    //MAKE DRY
    if (!editBooking) {
        const err = new Error("Booking couldn't be found");
        err.status = 404;
        err.title = 'Booking not Found';
        err.errors = [" 404: Provided bookingId not found"];
        return next(err);
    }
    //MAKE DRY (also one of these in reviews)
    if (userAuth != editBooking.dataValues.userId) {
        const err = new Error("Not your booking!. ");
        err.status = 403;
        err.title = 'UnAuthorized';
        err.errors = [" 404: Not Authorized"];
        return next(err);
    }

    await editBooking.update({
        startDate,
        endDate
    }) ;

    res.json(editBooking)

});




module.exports = router;