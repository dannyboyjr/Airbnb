import './SpotCard.css'
import { Link } from "react-router-dom";
import ThumbNailImage from '../ThumbNailImage/ThumbNailImage';


const SpotCard = ({spot}) => {
    
    let spotImageArray = spot.SpotImages
    

    return(
        <Link className="link" to={`/spots/${spot.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className='spotCard'>
            
            <ThumbNailImage images={spotImageArray} />

            
        <div className='elementsBelowPic'>
            <div 
                className='spotCardName'>{spot.name}
                <div>
                    <span className="stars">&#9733;</span>
                    {Math.round(spot.averageStars * 100) / 100}
                </div>
            </div>
            <div className='locationAndStars'>
                {spot.city},
                {spot.state} 
            </div> 
               <span className='spotCardPrice'> ${spot.price}</span> night
        </div>
        </div>

        </Link>

       
    )
}


export default SpotCard;

