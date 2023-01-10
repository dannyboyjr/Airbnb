import './SpotList.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllSpots } from '../../../store/spots';
import SpotCard from '../SpotCard/SpotCard'


const SpotList = () => {
    const [isLoaded, setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const spotObj = useSelector(state => state.spots)
    const spotArray = Object.values(spotObj)


    useEffect(()=>{

        dispatch(loadAllSpots()).then(()=> setIsLoaded(true))
        
    },[dispatch])

    return (
        <>
        <div>SpotList</div>
        <div className='spots'>
        {isLoaded && 
        spotArray.map(spot => (
            <SpotCard key={spot.id} spot={spot}/>
        ))
    }
        </div>
        
        </>
    )
}

export default SpotList