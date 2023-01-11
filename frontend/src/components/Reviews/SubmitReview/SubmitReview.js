import React, { useState } from 'react';
import { addReview } from '../../../store/spotByIdStore'
import { useDispatch, useSelector } from 'react-redux'

const SubmitReview = ({id}) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);



    const handleSubmit = (e) => {
        e.preventDefault()
        if(!sessionUser){
            return
        }

        
        let review = {
            review:reviewText,
            stars:rating
           
        }
        console.log(review)
        dispatch(addReview(review, id)).then(()=>{
            setReviewText("")
            setRating(0)
            setHover(0)

        })
    }


   
    return (

      <div className="star-rating">
              <form onSubmit={handleSubmit}>
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