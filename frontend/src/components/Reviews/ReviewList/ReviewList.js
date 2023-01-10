import Reviews from '../Reviews'
import './ReviewList.css'

const ReviewList = ({id}) => {
    return (
        <div className='reviewList'>
            <Reviews id={id} />
        </div>
    )
}

export default ReviewList;