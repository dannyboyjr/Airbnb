import SpotList from '../components/Spot/SpotList/SpotList'
import {useEffect} from 'react'



const Home = () => {

    useEffect(()=>{

    },[SpotList])
    
    return (
        <div className="page-layout-for-footer">

        <SpotList />
        </div>

    )
}

export default Home