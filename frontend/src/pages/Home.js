import SpotList from '../components/Spot/SpotList/SpotList'
import {useEffect} from 'react'



const Home = () => {

    useEffect(()=>{

    },[SpotList])
    
    return (
        <SpotList />
    )
}

export default SpotList