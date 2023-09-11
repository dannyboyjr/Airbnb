import './MyReviewList.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyReviewCard from '../MyReviewCard/MyReviewCard'
import { loadAllReviews } from '../../../store/reviewsStore'



const MyReviewList = () => {

    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const myReviews = useSelector(state => state.myReviews)
    const myReviewsArray = Object.values(myReviews)

    useEffect(()=>{
        dispatch(loadAllReviews()).then(()=> setIsLoaded(true))
    },[dispatch])

    return(
        <div className='myReviewContainer'>
        <h3 className='myReviewTitle'>My Reviews</h3>
        <div className='myReviewSection'>
            {isLoaded && myReviewsArray.map((review, i) =>(
                <MyReviewCard key={i} review={review} />
            )) }
            
        </div>
        </div>
    )
}

export default MyReviewList;