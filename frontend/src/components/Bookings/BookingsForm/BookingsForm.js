import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadSpotById } from "../../../store/spotByIdStore";
import { createBooking, loadAllSpotBookings } from "../../../store/bookings";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingsForm.css";

const BookingsForm = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const spotById = useSelector((state) => state.spotById);
  let sessionUser = useSelector((state) => state.session.user);
  let currentBookings = useSelector((state) => state.bookings);
  const currentBookingsArray = Object.values(currentBookings);
  const history = useHistory();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [guests, setGuests] = useState(null);

  //so calendar disappears after lcicking off the cal pop up.
  const datePickerRef = React.useRef();

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkin || !checkout || !sessionUser) {
      alert("Be sure to fill out both checkin date and checkout date.");
      return;
    }
    if ( sessionUser.id == spotById.userId) {
      alert("Cannot book on a listing you own!");
      setCheckin(null);
      setCheckout(null);
      setGuests(null);
      setShowDatePicker(false);
      return;
    }

    // Create bookingData object
    const bookingData = {
      startDate: checkin,
      endDate: checkout,
    };

    try {
      await dispatch(createBooking(id, bookingData));
      alert("Booking successful!");

      // Reset form to initial state
      setCheckin(null);
      setCheckout(null);
      setGuests(null);
      setShowDatePicker(false);
      history.push('/profile')
    } catch (err) {
      alert(`Dates are unavailable or you already have a booking on those dates!`);

    }
  };
ç
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckin(start);
    setCheckout(end);

    if (start && end) {
      setShowDatePicker(false);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time to midnight to start with today's date

  const calculateNights = (checkin, checkout) => {
    if (!checkin || !checkout) return 0;

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
  };

  const calculateTotal = (checkin, checkout, price) => {
    const nights = calculateNights(checkin, checkout);
    return nights * price;
  };

  const calculateServiceFee = (checkin, checkout, price) => {
    const total = calculateTotal(checkin, checkout, price);
    const serviceFeePercentage = 0.14; // 14%
    const serviceFee = (total * serviceFeePercentage).toFixed(2);
    return serviceFee;
  };

  const calculateTotalBeforeTaxes = (checkin, checkout, price) => {
    const total = calculateTotal(checkin, checkout, price);
    const serviceFee = calculateServiceFee(checkin, checkout, price);
    const totalBeforeTaxes = total + parseFloat(serviceFee);
    return totalBeforeTaxes.toFixed(2);
  };

  const getDisabledDates = (bookings) => {
    const disabledDates = [];

    bookings.forEach((booking) => {
      const existingStart = new Date(booking.startDate);
      const existingEnd = new Date(booking.endDate);

      for (
        let d = new Date(existingStart);
        d <= existingEnd;
        d.setDate(d.getDate() + 1)
      ) {
        disabledDates.push(new Date(d));
      }
    });
    return disabledDates;
  };

  const disabledDates = getDisabledDates(currentBookingsArray);

  const nights = calculateNights(checkin, checkout);

  useEffect(() => {
    dispatch(loadAllSpotBookings(id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bookingFormCard">
      <div className="topInfo">
        <div className="priceById">
          ${spotById.price} <span className="priceByIdNight">night</span>{" "}
        </div>
        <div className="ratingInfo">
          <span className="star">&#9733;</span>{" "}
          {Math.round(spotById.averageStars * 100) / 100} stars
        </div>
      </div>

      <form className="bookingForm" onSubmit={handleSubmit}>
        <div className="checkin-checkout-boxes">
          <input
            type="text"
            className="date-input"
            readOnly
            value={checkin ? checkin.toLocaleDateString() : ""}
            onClick={toggleDatePicker}
            placeholder="Check-in"
          />
          <input
            type="text"
            className="date-input"
            readOnly
            value={checkout ? checkout.toLocaleDateString() : ""}
            onClick={toggleDatePicker}
            placeholder="Check-out"
          />
        </div>
        <div className="guests-container">
  <div className="input-with-label">
    <select
      value={guests}
      onChange={(e) => handleGuestsChange(e.target.value)}
      className="guest-input"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  </div>
</div>


        {showDatePicker && (
          <div className="date-picker-wrapper" ref={datePickerRef}>
            {/* {nights > 0 && <p>{nights} night(s)</p>} */}
            <div className="nights-info"></div>
            <div className="checkin-checkout-boxes">
              <div className="date-label">
                <DatePicker
                  calendarClassName="custom-calendar"
                  selected={checkin}
                  onChange={handleDateChange}
                  startDate={checkin}
                  endDate={checkout}
                  selectsRange
                  monthsShown={2}
                  inline
                  minDate={today}
                  excludeDates={disabledDates}
                />
              </div>
            </div>
          </div>
        )}

        {Object.keys(sessionUser).length > 0 ? (
          <>
            <button type="submit" className="formButton">
              Reserve
            </button>

            <p>You won't be charged yet</p>
            <div className="calculation">
              <h5>Total for {nights} night(s)</h5>
              <h5>${calculateTotal(checkin, checkout, spotById.price).toFixed(2)}</h5>
            </div>

            <div className="calculation">
              <h5>Clonebnb service fee</h5>
              <h5>${calculateServiceFee(checkin, checkout, spotById.price)}</h5>
            </div>

            <div className="calculation" id="total">
              <div className="total">
                <h4>Total before taxes</h4>
              </div>
              <h4>
                ${calculateTotalBeforeTaxes(checkin, checkout, spotById.price)}
              </h4>
            </div>
          </>
        ) : (
          <div className="login-or-signup">
            <p>
              <a href="/login">Login</a> or{" "}
              <a href="/signup">Create an account</a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingsForm;
