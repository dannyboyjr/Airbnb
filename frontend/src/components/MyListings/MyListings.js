import './MyListings.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllSpots } from '../../store/spots';
import SpotCard from './SpotCard/SpotCard'



const MyListings = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots)
    const spotArray = Object.values(spotObj)
    const sessionUser = useSelector(state => state.session.user);

    const userSpots = spotArray.filter(spot => spot.userId == sessionUser.id)


    useEffect(() => {

        dispatch(loadAllSpots()).then(() => setIsLoaded(true))

    }, [dispatch])

    return (
        <div className='my-listings-container'>
        <h3 className='my-listings-title'>My Listings</h3>
        <div className='spots'>
            {isLoaded &&
                userSpots.map(spot => (
                    <SpotCard key={spot.id} spot={spot} />
                ))
            }

        </div>
        </div>
    )
}

export default MyListings

