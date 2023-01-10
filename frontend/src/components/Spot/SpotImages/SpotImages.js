
import './SpotImages.css'

const SpotImages = ({spot}) => {

const spotImages = spot.SpotImages
const prevImage = spotImages.filter(image => image.preview == true)
const noImg = "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
let displayImg;

spotImages.length > 0 ? displayImg = prevImage[0].url : displayImg = noImg

    return (
        <div className='spotImages'>
         <img className='previewImg'
        src={displayImg}
      alt={noImg}
      />
        </div>
    )
}

export default SpotImages