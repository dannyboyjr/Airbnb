
import EditReview from '../components/Reviews/EditReview/EditReview'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../store/spotByIdStore'
import { useParams } from 'react-router-dom';


const EditReviewPage = () => {
    
    const { id } = useParams();
    const [isLoaded, setIsLoaded ] = useState(false)
    const spotbyId = useSelector(state => state.spotById.Reviews)
    let sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    let review = spotbyId.filter(review => sessionUser.id === review.userId)
    
    useEffect(()=>{

        dispatch(loadSpotById(1)).then(()=> setIsLoaded(true))
    },[dispatch])
    

    return (
        <div>
            <h1>Edit Review</h1>
            {isLoaded && 
            <EditReview review={review[0]} />
            }
        </div>
     
        )
}



export default EditReviewPage