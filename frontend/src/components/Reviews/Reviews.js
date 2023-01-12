import './Reviews.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../../store/spotByIdStore'
import ReviewCard from './ReviewCard/ReviewCard'
import SubmitReview from './SubmitReview/SubmitReview';


const Reviews = ({id}) => {
    const [isLoaded, setIsLoaded ] = useState(false)
    const [userOwnsSpot, setUserOwnsSpot] = useState(false)
    const spotById = useSelector(state => state.spotById)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
},[dispatch])


    return (
            <div className='reviewSection'>
            <h1>Reviews</h1>
          { !userOwnsSpot && <SubmitReview id={id}/> }
        
    {isLoaded && 
    spotById.Reviews.map((review, index) =>(
        <ReviewCard key={index} review={review} />
    ))}

    </div>
    )
}

export default Reviews;