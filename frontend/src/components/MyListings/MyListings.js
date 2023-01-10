
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllSpots } from '../../store/spots';
import SpotCard from '../Spot/SpotCard/SpotCard'



const MyListings = () => {
    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots)
    const spotArray = Object.values(spotObj)
    const sessionUser = useSelector(state => state.session.user);

    const userSpots = spotArray.filter(spot => spot.userId == sessionUser.id)


    useEffect(()=>{

        dispatch(loadAllSpots()).then(()=> setIsLoaded(true))
        
    },[dispatch])

    return (
        <>
        <div>SpotList</div>
        {isLoaded && 
        userSpots.map(spot => (
            <SpotCard key ={spot.id} spot={spot}/>
        ))
    }
        
        </>
    )
}

export default MyListings

