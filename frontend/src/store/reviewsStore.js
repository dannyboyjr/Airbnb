// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_REVIEWS = "reviews/loadReviews";
const DELETE_A_REVIEW = 'reviews/delete'


const loadReviews = (reviews) => ({ //all spots
	type: LOAD_REVIEWS,
	reviews
})

export const reviewADelete = (id) => {
  return {
    type: DELETE_A_REVIEW,
    id
  }
}

export const loadAllReviews = () => async (dispatch) => {
	const response = await csrfFetch("/api/reviews/current");

	if(response.ok){
		const reviews = await response.json();
		dispatch(loadReviews(reviews))
	}
}

export const deleteMyReview = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch(reviewADelete(id))
  }
}



const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
	case LOAD_REVIEWS:
    newState = {...state}
    console.log(action)
    action.reviews.forEach(review =>{
    newState[review.id] = review
    });
    return newState;
    case DELETE_A_REVIEW:
        newState = { ...state }
        console.log(newState)
      delete newState[action.id]
      return newState
    default:
      return state;
  }
};

export default reviewsReducer;