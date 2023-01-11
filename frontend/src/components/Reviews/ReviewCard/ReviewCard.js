import './ReviewCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReview } from '../../../store/spotByIdStore'

const ReviewCard = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()


    const handleEdit = () => {

    }

    const handleDelete = () => {
        console.log(review)
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