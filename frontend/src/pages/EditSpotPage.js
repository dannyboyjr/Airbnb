import EditSpotForm from '../components/Spot/EditSpotForm/EditSpotForm'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../store/spotByIdStore'
import { useParams } from 'react-router-dom';

const EditSpotPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const spotById = useSelector(state => state.spotById)
    const [isLoaded, setIsLoaded ] = useState(false)
    
    useEffect(()=>{

        dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
    },[dispatch])
    

    return (
        <div className="page-layout-for-footer">
        <div>
            {isLoaded &&
            <EditSpotForm spot={spotById} id={id}/>
}
        </div>

        </div>
        )
}



export default EditSpotPage