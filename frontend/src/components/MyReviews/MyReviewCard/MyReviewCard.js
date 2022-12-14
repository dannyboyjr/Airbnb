
import { useDispatch, useSelector } from 'react-redux'
import {deleteMyReview} from '../../../store/reviewsStore'
import { useHistory } from 'react-router-dom';
import formateDistanceToNow from 'date-fns/formatDistanceToNow';


const MyReviewCard = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()
    const history = useHistory();


    const handleEdit = (e) => {
        e.preventDefault()
        history.push(`/reviews/${review.id}`);
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