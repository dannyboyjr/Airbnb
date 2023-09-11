import './Spot.css'
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
        // Display a confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to delete your listing?');
    
        if (isConfirmed) {
          // If the user confirms, proceed with the deletion
          dispatch(deleteASpotById(id));
          history.push(`/`);
        }
      };
    

    const handleEdit = () => {
        history.push(`/spots/${id}/edit`);
    }



    return(
        <div>
              {isLoaded &&
            <div className='SpotbyId'>
                <h1 className="spotByIdName">{spotById.name}</h1>
            <div className='spotInfo'>
                <div>
               stars {Math.round(spotById.averageStars * 100) / 100} ·
               </div>
               <div>
               {spotById.totalReviews} reviews
               </div> 
                
               <div>
               {spotById.city} {spotById.state} {spotById.country}
               </div>
               {spotById.userId === sessionUser.id && 
               <div>
               <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
                </div>
                }
            </div> 
            <SpotImages spot={spotById}/>
            <p><span className="priceById">${spotById.price}</span> / night< span className='hostedBy'> hosted by {spotById.User.firstName} {spotById.User.lastName} </span></p>

            <div className='descriptionSection'>
                <span className="priceById"><p>Description</p></span>
            {spotById.description}
            </div>
            </div>
   

              }
        </div>
    )
}

export default Spot