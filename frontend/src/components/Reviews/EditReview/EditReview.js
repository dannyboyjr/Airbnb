
import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import { editAReview } from '../../../store/spotByIdStore';
import { fetchReviewById } from '../../../store/reviewsStore'
import { useHistory, useParams } from 'react-router-dom';
import './EditReview.css'


const EditReview = () => {
  const { id } = useParams();

    let sessionUser = useSelector(state => state.session.user);
    let spotReview = useSelector(state => state.myReviews.reviewById); 
    let dispatch = useDispatch()
    const history = useHistory();
 
    //for stars
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    //format date time
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = ""; // Initialize to empty string

    if (isLoaded && spotReview?.createdAt) {
      formattedDate = new Date(spotReview.createdAt).toLocaleDateString(undefined, dateOptions);
    }
    


    const handleEdit = () => {

      if(!reviewText.length > 1000 || !reviewText.length < 1){
      const editedReview = {
        review:reviewText,
        stars:rating
      }

      dispatch(editAReview(editedReview, spotReview.id)).then(()=>{
        history.goBack();
    })
    }else{
      setErrors(['Review text must be 1 to 1000 charaters'])
    }

    }

  // Only fetch review data when the component mounts or 'id' changes.
useEffect(() => {
  dispatch(fetchReviewById(id))
    .catch(error => console.error('Error loading data:', error));
}, [dispatch, id]);

// Update local state only when 'spotReview' changes.
useEffect(() => {
  if (spotReview) {  // Make sure spotReview is not undefined
    setRating(spotReview.stars);
    setReviewText(spotReview.review);
    setIsLoaded(true);
  }
}, [spotReview]);

    return (
      <div className='edit-my-review-container specific-container'>
        <div className="edit-review-card specific-card">

        {isLoaded && spotReview.userId === sessionUser.id && spotReview.review &&(
          <div className="spot-info">
            <img src={spotReview.Spot.SpotImages[0].url} alt={spotReview.Spot.name} className="spot-image-edit-reivew" />
            <h2 className="spot-name">{spotReview.Spot.name}</h2>
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
          <div className='edit-review-btns'>
            <button className="save-edit-review-bnt" onClick={handleEdit}>Save</button>
            <button className="cancel-btn" onClick={()=>{history.goBack();}}>cancel</button>
          </div>
        
      </div>
    </div>
  )
}

export default EditReview;