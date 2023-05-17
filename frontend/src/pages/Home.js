import SpotList from '../components/Spot/SpotList/SpotList'
import Footer from '../components/Footer/Footer'
import {useEffect} from 'react'



const Home = () => {

    useEffect(()=>{

    },[SpotList])
    
    return (
        <div className="page-layout-for-footer">
        <div>
        <SpotList />
        </div>
        <Footer />
        </div>
    )
}

export default Home