// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_SPOTS = "spots/loadSpots";
const CREATE_SPOT = "spots/createSpot";
const DELETE_A_SPOTS = "spots/deleteOne"


const loadSpots = (spots) => ({ //all spots
	type: LOAD_SPOTS,
	spots
})

const create = (spot) => ({
  type: CREATE_SPOT,
  spot
})

export const deleteASpot = (id) => {
  return {
    type: DELETE_A_SPOTS,
    id
  }
}



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
    
		return dispatch(create(spot))
	}
  console.log(response)
  return response
}

export const deleteASpotById = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(deleteASpot(id))
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
    console.log("ACCCTTTIIIOOONN")
    console.log(action)
    newState[action.spot.newSpot.id] = action.spot.newSpot
      return newState;

      case DELETE_A_SPOTS:
        newState = {...state}
        delete newState[action.id]
        return newState
    default:
      return state;
  }
};

export default spotReducer;




