// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_REVIEWS = "reviews/loadReviews";


const loadReviews = (reviews) => ({ //all spots
	type: LOAD_REVIEWS,
	reviews
})

export const loadAllReviews = () => async (dispatch) => {
	const response = await csrfFetch("/api/reviews/current");

	if(response.ok){
		const reviews = await response.json();
		dispatch(loadReviews(reviews))
	}
}



const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
	case LOAD_REVIEWS:
        console.log("DOGINTHEHOUSE")
    newState = {...state}

    console.log(action)
    action.reviews.forEach(review =>{
    newState[review.id] = review
    });
    return newState;
    default:
      return state;
  }
};

export default reviewsReducer;