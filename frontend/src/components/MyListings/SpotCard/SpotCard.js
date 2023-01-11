import './SpotCard.css'
import { Link } from "react-router-dom";
import ThumbNailImage from '../ThumbNailImage/ThumbNailImage';


const SpotCard = ({spot}) => {
    
    let spotImageArray = spot.SpotImages

    return(
        <Link className="link" to={`/spots/${spot.id}`}>
        <div className='spotCard'>
            
            <ThumbNailImage images={spotImageArray} />
        {spot.name}
           <div className='locationAndStars'>
                {spot.city},{spot.state} 
           <div>{Math.round(spot.averageStars * 100) / 100}</div>
           </div> 
            ${spot.price} night

           
        
        </div>
        </Link>

       
    )
}


export default SpotCard;

