import EditSpotForm from "../components/EditSpotForm/EditSpotForm"
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
        <div>
            <h1>Edit Spot</h1>
            {isLoaded &&
            <EditSpotForm spot={spotById} id={id}/>
}
        </div>
        )
}



export default EditSpotPage