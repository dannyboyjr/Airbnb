import './SpotCard.css'
import { Link } from "react-router-dom";

const SpotCard = ({spot}) => {

    return(
        <Link className="link" to={`/spots/${spot.id}`}>
        <div className='spotCard'>
            

            {spot.previewImage}<p>image</p>
        {spot.name}
           <div className='locationAndStars'>
                {spot.city},{spot.state} 
           <div>{spot.averageStars}</div>
           </div> 
            ${spot.price} night

           
        
        </div>
        </Link>

       
    )
}


export default SpotCard;