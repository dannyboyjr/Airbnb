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
    const spotById = useSelector(state => state.spotById);
    let userOwnsSpot = false

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!sessionUser){
            return
        }

        setErrors([])

        let userAlreadyPosted = spotById.Reviews.filter(review => review.userId === sessionUser.id)
        if(spotById.userId == sessionUser.id){
           userOwnsSpot = true
        }


        if(reviewText.length < 1 && rating === 0){
          setErrors(['Review text must be 1 to 1000 charaters', "Star rating must be 1 - 5"])
        }else if(reviewText.length < 1) {
          setErrors(['Review text must be 1 to 1000 charaters'])
        }else if(rating === 0){
          setErrors(["Star rating must be 1 - 5"])
        }else if(userAlreadyPosted.length > 0) {
          setErrors([ 'Cannot post multiple reviews!'])
        }else if(userOwnsSpot) {
          setErrors([ 'Cannot own Spot!!'])
        }else {
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