import './ReviewCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReview } from '../../../store/spotByIdStore'
import { useHistory } from 'react-router-dom';


const ReviewCard = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()
    const history = useHistory();


    const handleEdit = (e) => {
        e.preventDefault()
        history.push(`/reviews/${review.id}`);
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id))

    }


    return (
        <div className='reviewCard'>
             {review.review}
            <div>
            Stars: {review.stars}
            </div>
           Date:  {review.createdAt}
           {review.userId === sessionUser.id && 
               <div>
               <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
                </div>
                }
        </div>
    )
}

export default ReviewCard;