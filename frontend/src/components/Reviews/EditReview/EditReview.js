
import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import { deleteReview } from '../../../store/spotByIdStore';

const EditReview = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()

    //for stars
    const [rating, setRating] = useState(review.stars);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState(review.review)


    const handleEdit = () => {

    }
    const handleDelete = () => {
        console.log(review)
        dispatch(deleteReview(review.id))

    }

    return (
        <div className='reviewCard'>
             <label>
                <input
                value={reviewText} 
                onChange={(e) => setReviewText(e.target.value)} />
             </label>
            
             <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              value={rating}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
           
          );
        })}

      </div>

           Date:  {review.createdAt}
           {review.userId === sessionUser.id && 
               <div>
               <button onClick={handleEdit}>save</button>
                <button onClick={handleDelete}>delete</button>
                </div>
                }













        </div>






    )
}

export default EditReview;