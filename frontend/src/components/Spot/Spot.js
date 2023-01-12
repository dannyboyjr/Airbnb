import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../../store/spotByIdStore'
import {deleteASpotById} from '../../store/spots'
import { useHistory } from 'react-router-dom';
import SpotImages from '../Spot/SpotImages/SpotImages'


const Spot = ({id}) => {
    
    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const spotById = useSelector(state => state.spotById)
    let sessionUser = useSelector(state => state.session.user);

    const history = useHistory();



    useEffect(()=>{

        dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
    },[dispatch])

    const handleDelete = () => {
        dispatch(deleteASpotById(id))
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
               stars {Math.round(spotById.averageStars * 100) / 100} · 
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
            <SpotImages spot={spotById}/>
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