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
    let sessionUser = useSelector(state => state.session.user);

    useEffect(()=>{
        dispatch(loadAllReviews()).then(()=> setIsLoaded(true))
    },[dispatch])
console.log(myReviews)
    return(
        <div className='myReviewList'>
            {isLoaded && myReviewsArray.map(review =>(
                <MyReviewCard review={review} />
            )) }
            
        </div>
    )
}

export default MyReviewList;