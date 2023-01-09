import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../../store/spotByIdStore'
import {deleteSpotById} from '../../store/spotByIdStore'
import { useHistory } from 'react-router-dom';
import SpotImages from '../SpotImages/SpotImages'


const Spot = ({id}) => {
    
    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const spotById = useSelector(state => state.spotById)
    let sessionUser = useSelector(state => state.session.user);

    const history = useHistory();


    //THIS IS UGGLY NO SURE WHY I CANT GET BUTTONS TO APPEAR WITHOUT THIS> NEED HELP
    if(sessionUser == undefined) {
        sessionUser = -1
    }
//----------------------------------------- ALSO ON SUBMIT REVIEW

    useEffect(()=>{

        dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
    },[dispatch])

    const handleDelete = () => {
        dispatch(deleteSpotById(id))
        history.push(`/`);
    }

    const handleEdit = () => {
        history.push(`/spots/${id}/edit`);
    }



    return(
        <div>
              {isLoaded &&
            <div>
                <h1>{spotById.name}</h1>
            <div >
               stars {spotById.averageStars} · 
               {spotById.totalReviews} reviews ·
               {spotById.totalReviews} · 
               {spotById.city} {spotById.state} {spotById.country} · 
               {spotById.userId === sessionUser.id && 
               <div>
               <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
                </div>
                }
            </div> 
            <SpotImages spotId={id}/>
            <p><span>${spotById.price} a night</span> -  hosted by {spotById.User.firstName} {spotById.User.lastName} </p>

            <div>
                <p>Description</p>
            {spotById.description}
            </div>
            </div>
   

              }
        </div>
    )
}

export default Spot