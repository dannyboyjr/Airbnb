
import EditReview from '../components/Reviews/EditReview/EditReview'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadSpotById} from '../store/spotByIdStore'
import { useParams } from 'react-router-dom';


const EditReviewPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const spotById = useSelector(state => state.spotById)
    const [isLoaded, setIsLoaded ] = useState(false)
    
    useEffect(()=>{

        dispatch(loadSpotById(id)).then(()=> setIsLoaded(true))
    },[dispatch])
    

    return (
        <div>
            <h1>Edit Review</h1>
            {isLoaded &&
            <EditReview spot={spotById} id={id}/>
}
        </div>
        )
}



export default EditSpotPage