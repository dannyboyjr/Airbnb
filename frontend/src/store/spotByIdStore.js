// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const GET_SPOT = "spots/getspot"
const DELETE_SPOT = "spots/deleteSpot"
const EDIT_SPOT = "spots/editSpot"


const ADD_REVIEW = "spots/addReview"
const DELETE_REVIEW = "reviews/deleteReview"
const EDIT_REVIEW = "review/edit"


const loadSpot = (spot) => ({ //spot by id
  type: GET_SPOT,
  spot
})

export const deleteSpot = (id) => {
  return {
    type: DELETE_SPOT,
    id
  }
}

const spotEdit = (spot) => ({
  type: EDIT_SPOT,
  spot
})

const reviewAdd = (review) => ({
  type: ADD_REVIEW,
  review
})

export const reviewDelete = (id) => {
  return {
    type: DELETE_REVIEW,
    id
  }
}

const reviewEdit = (review) => ({
  type: EDIT_REVIEW,
  review
})




export const loadSpotById = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`);

  if (response.ok) {
    const spot = await response.json();
    dispatch(loadSpot(spot))
  }
}

export const deleteSpotById = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
   
    dispatch(deleteSpot(id))
  }
}


export const editSpot = (spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot.id}`, {
    method: "PUT",
    body: JSON.stringify(spot)
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(spotEdit(spot))
  }

}

export const addReview = (review, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}/reviews`, {
    method: "POST",
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json();
    
    return dispatch(reviewAdd(review))
  }
  console.log("ADDREVIEW RESPONSE")
  console.log(response)

  return response

}



export const deleteReview = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch(reviewDelete(id))
  }
}


export const editAReview = (review, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "PUT",
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(reviewEdit(review))
  }

}





const initialState = {};

const spotByIdReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOT:
      newState = { ...state }
      newState = action.spot
      return newState;
    case DELETE_SPOT:
      newState = { ...state}
      delete newState[action.id]
       return 
    case EDIT_SPOT:
      newState = { ...state }
      newState[action.spot.id] = action.spot
      return newState;
    case ADD_REVIEW:
      newState = { ...state }
      let reviewObj = {}
      newState.Reviews.forEach(review =>{
        reviewObj[review.id] = review
      })
      reviewObj[action.review.newReview.id] = action.review.newReview
      newState.Reviews = Object.values(reviewObj)
      return newState
      case DELETE_REVIEW:
        const deleteObj = {}
        newState = { ...state }
        newState.Reviews.forEach(review =>{
          deleteObj[review.id] = review
      })
      delete deleteObj[action.id]
      newState.Reviews = Object.values(deleteObj)
      return newState
    default:
      return state;
  }
};

export default spotByIdReducer;