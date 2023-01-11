
import './MyReviewCard.css'

const MyReviewCard = ({review}) => {
    console.log("DOGGMEAT")
    console.log(review)
    return (
        <div className='myReviewCard'>
            <p>{review.Spot.name}</p>
            <p>${review.Spot.price}</p>
            <p>Your Review:</p>
            <p>{review.review}</p>
            <p>Stars: {review.stars}</p>
        </div>
    )
}

export default MyReviewCard