// frontend/src/store/bookings.js
import { csrfFetch } from './csrf';

const LOAD_BOOKINGS = "bookings/loadBookings";
const EDIT_BOOKING = "bookings/editBooking";
const DELETE_BOOKING = "bookings/deleteBooking";
const LOAD_SPOT_BOOKINGS = "bookings/loadSpotBookings";
const CREATE_BOOKING = "bookings/createBooking";

const loadBookings = (bookings) => ({
  type: LOAD_BOOKINGS,
  bookings,
});

const editBooking = (booking) => ({
  type: EDIT_BOOKING,
  booking,
});

const deleteBooking = (id) => ({
  type: DELETE_BOOKING,
  id,
});

const loadSpotBookings = (spotBookings) => ({
  type: LOAD_SPOT_BOOKINGS,
  spotBookings,
});

const create = (booking) => ({
  type: CREATE_BOOKING,
  booking,
});

export const loadUserBookings = () => async (dispatch) => {
  const response = await csrfFetch("/api/bookings/current");

  if (response.ok) {
    const bookings = await response.json();
    dispatch(loadBookings(bookings));
  }
};

export const editBookingById = (id, bookingData) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(bookingData),
  });

  if (response.ok) {
    const updatedBooking = await response.json();
    dispatch(editBooking(updatedBooking));
  }
};

export const deleteBookingById = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    await response.json();
    dispatch(deleteBooking(id));
  }
};

export const loadAllSpotBookings = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`);

  if (response.ok) {
    const spotBookings = await response.json();
    dispatch(loadSpotBookings(spotBookings));
  }
};

export const createBooking = (spotId, bookingData) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });

  if (response.ok) {
    const newBooking = await response.json();
    dispatch(create(newBooking.createBooking));
  }
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_BOOKINGS:
      newState = { };
      action.bookings.forEach(booking => {
        newState[booking.id] = booking;
      });
      return newState;
    case EDIT_BOOKING:
      newState = { ...state };
      newState[action.booking.id] = action.booking;
      return newState;
    case DELETE_BOOKING:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case LOAD_SPOT_BOOKINGS:
      newState = { };
      action.spotBookings.forEach(booking => {
        newState[booking.id] = booking;
      });
      return newState;
    case CREATE_BOOKING:
      newState = { ...state };
      newState[action.booking.id] = action.booking;
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
