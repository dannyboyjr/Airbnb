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
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSpotById(id)).then(() => {
            setIsLoaded(true);

            // Check if the user owns the spot after data is loaded
            if (spotById.userId === sessionUser.id) {
                setUserOwnsSpot(true);
            }
        });
    }, [dispatch, id, sessionUser, spotById.userId])

    // Calculate the number of reviews
    const numberOfReviews = isLoaded ? spotById.Reviews.length : 0;

    return (
            <div className='reviewSection'>
            <div className='reviews-header'>
                <h1>Reviews</h1>
                <p>({numberOfReviews})</p>
            </div>
          { !userOwnsSpot && <SubmitReview id={id}/> }
        
    {isLoaded && 
    spotById.Reviews.map((review, index) =>(
        <ReviewCard key={index} review={review} />
    ))}

    </div>
    )
}

export default Reviews;