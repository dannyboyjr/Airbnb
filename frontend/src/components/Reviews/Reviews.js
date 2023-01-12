import './Reviews.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../../store/spotByIdStore'
import ReviewCard from './ReviewCard/ReviewCard'
import SubmitReview from './SubmitReview/SubmitReview';


const Reviews = ({id}) => {
    const [isLoaded, setIsLoaded ] = useState(false)
    const spotReviews = useSelector(state => state.spotById.Reviews)
    const dispatch = useDispatch()


useEffect(()=>{

    dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
},[dispatch])


    return (
            <div className='reviewSection'>
            <h1>Reviews</h1>
        <SubmitReview id={id}/>
    {isLoaded && 
    spotReviews.map((review, index) =>(
        <ReviewCard key={index} review={review} />
    ))}

    </div>
    )
}

export default Reviews;