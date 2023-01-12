import React, { useState } from 'react';
import { addReview } from '../../../store/spotByIdStore'
import { useDispatch, useSelector } from 'react-redux'
import './SubmitReview.css'

const SubmitReview = ({id}) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);



    const handleSubmit = (e) => {
        e.preventDefault()
        if(!sessionUser){
            return
        }

        if(!reviewText.length > 250 || !reviewText.length < 1 || !rating < 0){
          setErrors([])
        let review = {
            review:reviewText,
            stars:rating
           
        }
        dispatch(addReview(review, id)).then(()=>{
            setReviewText("")
            setRating(0)
            setHover(0)

        })
      }else{
        setErrors(['Review text must 1 to 250 charaters', "Star rating must be 1 - 5"])
      }
    }


   
    return (

      <div className="star-rating">

              <form onSubmit={handleSubmit}>
              {errors.length > 0 && 
            <ul>
            {errors.map((e, i ) => (
                <li key={i}>{e}</li>
            ))}
            </ul>
            }
        <label>
          <input type="text" placeholder='add your review' value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>

        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
           
          );
        })}
        
        <button>Submit</button>
      </form>

    
        
      </div>
    );




}

export default SubmitReview