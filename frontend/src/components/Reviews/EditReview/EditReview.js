
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { deleteReview, editAReview } from '../../../store/spotByIdStore';
import { useHistory } from 'react-router-dom';



const EditReview = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()
    const history = useHistory();

    

    //for stars
    const [rating, setRating] = useState(review.stars);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState(review.review)
    const [errors, setErrors] = useState([])

  console.log(review)
    const handleEdit = () => {

      if(!reviewText.length > 250 || !reviewText.length < 1 || !rating < 0){
      const editedReview = {
        review:reviewText,
        stars:rating
      }

      dispatch(editAReview(editedReview, review.id)).then(()=>{
        history.goBack();
    })
    }else{
      setErrors(['Review text must 1 to 250 charaters', "Star rating must be 1 - 5"])
    }

    }

    return (

        <div className='reviewCard'>
          {errors.length > 0 && 
            <ul>
            {errors.map((e, i ) => (
                <li key={i}>{e}</li>
            ))}
            </ul>
            }
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
                </div>
                }

        </div>

    )
}

export default EditReview;