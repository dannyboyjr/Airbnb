// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_SPOTS = "spots/loadSpots";
const CREATE_SPOT = "spots/createSpot";


const loadSpots = (spots) => ({ //all spots
	type: LOAD_SPOTS,
	spots
})

const create = (spot) => ({
  type: CREATE_SPOT,
  spot
})



export const loadAllSpots = () => async (dispatch) => {
	const response = await csrfFetch("/api/spots");

	if(response.ok){
		const spots = await response.json();
		dispatch(loadSpots(spots))
	}
}


export const createSpot = (spot) => async (dispatch)=>{
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    body: JSON.stringify(spot)
  });

  if(response.ok){
		const spot = await response.json();
		dispatch(create(spot))
	}

}



const initialState = {};

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
	case LOAD_SPOTS:
    newState = {...state}
    action.spots.spots.forEach(spot =>{
    newState[spot.id] = spot
    });
    return newState;
  case CREATE_SPOT:
    newState = {...state}
    newState[action.spot.id] = action.spot
      return newState;
    default:
      return state;
  }
};

export default spotReducer;




