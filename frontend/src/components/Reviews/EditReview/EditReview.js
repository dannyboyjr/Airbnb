
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { deleteReview, editAReview } from '../../../store/spotByIdStore';
import { useHistory } from 'react-router-dom';
import './EditReview.css'


const EditReview = ({review}) => {
    let sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spotById); // Replace with the correct way to access spotById
    let dispatch = useDispatch()
    const history = useHistory();
 
    //for stars
    const [rating, setRating] = useState(review.stars);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState(review.review)
    const [errors, setErrors] = useState([])

    //format date time
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(review.createdAt).toLocaleDateString(undefined, dateOptions);


    const handleEdit = () => {

      if(!reviewText.length > 1000 || !reviewText.length < 1){
      const editedReview = {
        review:reviewText,
        stars:rating
      }

      dispatch(editAReview(editedReview, review.id)).then(()=>{
        history.goBack();
    })
    }else{
      setErrors(['Review text must be 1 to 1000 charaters'])
    }

    }

    return (
      <div className='edit-my-review-container specific-container'>
        <div className="edit-review-card specific-card">

        {spot && (
          <div className="spot-info">
            <img src={spot.SpotImages[0].url} alt={spot.name} className="spot-image-edit-reivew" />
            <h2 className="spot-name">{spot.name}</h2>
          </div>
        )}

          {errors.length > 0 && 
            <ul className="specific-error-list">
            {errors.map((e, i ) => (
                <li key={i}>{e}</li>
            ))}
            </ul>
          }
          <label className="edit-reivew-label">
            <textarea
              className="edit-reivew-textarea"
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
        {review.userId === sessionUser.id && 
          <div className='edit-review-btns'>
            <button className="save-edit-review-bnt" onClick={handleEdit}>Save</button>
            <button className="cancel-btn" onClick={()=>{history.goBack();}}>cancel</button>
          </div>
        }
      </div>
    </div>
  )
}

export default EditReview;