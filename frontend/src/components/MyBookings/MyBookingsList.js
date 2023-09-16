
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyBookingCard from './MyBookingCard'
import {loadUserBookings} from "../../store/bookings"



const MyBookingsList = () => {

    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const myBookings = useSelector(state => state.bookings)
    const myBookingsArray = Object.values(myBookings)

    useEffect(()=>{
        dispatch(loadUserBookings()).then(()=> setIsLoaded(true))
    },[dispatch])

    return(
        <div className='myReviewContainer'>
        <h3 className='myReviewTitle'>My Bookings</h3>
        <div className='myReviewSection'>
            {isLoaded && myBookingsArray.map((booking, i) =>(
                <MyBookingCard key={i} booking={booking} />
            )) }
            
        </div>
        </div>
    )
}

export default MyBookingsList;