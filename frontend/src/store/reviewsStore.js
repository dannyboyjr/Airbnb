// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_REVIEWS = "reviews/loadReviews";
const LOAD_REVIEW_BY_ID = "reviews/loadReviewById";
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

const loadReviewById = (review) => ({
  type: LOAD_REVIEW_BY_ID,
  review,
});

export const loadAllReviews = () => async (dispatch) => {
	const response = await csrfFetch("/api/reviews/current");

	if(response.ok){
		const reviews = await response.json();
		dispatch(loadReviews(reviews))
	}
}

export const fetchReviewById = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`);
  if (response.ok) {
    const review = await response.json();
    dispatch(loadReviewById(review));
  }
};


export const deleteMyReview = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(reviewADelete(id))
  }
}





const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
	case LOAD_REVIEWS:
    newState = {...state}
    action.reviews.forEach(review =>{
    newState[review.id] = review
    });
    return newState;
    case DELETE_A_REVIEW:
        newState = { ...state }
      delete newState[action.id]
      return newState

      case LOAD_REVIEW_BY_ID:
      newState = { ...state }
      newState.reviewById = action.review
      return newState;
  
      default:
        return state;
    }
  };

export default reviewsReducer;


      