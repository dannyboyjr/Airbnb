
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import {deleteMyReview} from '../../../store/reviewsStore'
import { useHistory } from 'react-router-dom';
import formateDistanceToNow from 'date-fns/formatDistanceToNow';
import { loadSpotById } from "../../../store/spotByIdStore";


const MyReviewCard = ({review}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()
    const history = useHistory();



    const handleEdit = (e) => {
        e.preventDefault()


            dispatch(loadSpotById(review.Spot.id)).then(() => setIsLoaded(true)).then(() => history.push(`/reviews/${review.id}`))

        
        
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteMyReview(review.id))

    }

    return (
        <div className='reviewCard'>
            <div className='reviewText'>
             {review.review}
             </div>
            <div className='reviewStarsAndDate'>
            stars: {review.stars}
            
           <p className="createDateReview">{formateDistanceToNow(new Date(review.createdAt), {addSuffix: false})}</p>
           </div>
           {review.userId === sessionUser.id && 
               <div className='reviewBtns'>
               <button className='reviewBtns' onClick={handleEdit}>edit</button>
                <button  className='reviewBtns' onClick={handleDelete}>delete</button>
                </div>
                }
        </div>
    )
}

export default MyReviewCard;