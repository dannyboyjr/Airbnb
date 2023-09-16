// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const LOAD_SPOTS = "spots/loadSpots";
const CREATE_SPOT = "spots/createSpot";
const DELETE_A_SPOTS = "spots/deleteOne"

const CREATE_SPOT_IMAGE = 'spots/CREATE_SPOT_IMAGE';


const createSpotImage = (spotImage) => ({
  type: CREATE_SPOT_IMAGE,
  payload: spotImage,
});



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


// Thunk to create a spot image
export const createSpotImageThunk = (spotId, image) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/images`, {
    method: 'POST',
    body: JSON.stringify(image),
  });

  if (response.ok) {
    const spotImage = await response.json();
    dispatch(createSpotImage(spotImage));
  }
};



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

  if (response.ok) {
    const createdSpot = await response.json();
    dispatch(create(createdSpot));

    // Extract the preview URL from the spot object

    // Immediately create a spot image using the new spot's ID and set previewImage to true
    dispatch(createSpotImageThunk(createdSpot.newSpot.id, { url: spot.spotImage, previewImage: true }));
  }
  return response;
};

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




