import './Reviews.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../../store/spotByIdStore'
import ReviewCard from '../ReviewCard/ReviewCard'
import SubmitReview from './SubmitReview/SubmitReview';
import EditReview from './EditReview/EditReview';


const Reviews = ({id}) => {
    const [isLoaded, setIsLoaded ] = useState(false)
    const spotReviews = useSelector(state => state.spotById.Reviews)
    let sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()


useEffect(()=>{

    dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
},[dispatch])


    return (
        <div>
        <h1>Reviews</h1>
        <SubmitReview id={id}/>

    {isLoaded && 

    spotReviews.map((review, index) =>(
        // <ReviewCard key={index} review={review} />
        <EditReview review={review} />
    ))

       

    }
    
   
    
        
        </div>
    )
}

export default Reviews;