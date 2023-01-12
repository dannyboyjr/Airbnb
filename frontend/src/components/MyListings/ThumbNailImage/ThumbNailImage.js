import './ThumbNailImage.css'
import { useState, useEffect } from "react";
const ThumbNailImage = ({images}) => {
    const [validImg, SetValidImg] = useState(false);
    const [img, setImg] = useState('')
    const [noImg, setNoImg] = useState("https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg")
    


    useEffect(() => {
        const checkImage = async (url) => {
          try {
            const res = await fetch(images[0].url, { method: "HEAD" });
            SetValidImg(true);
            setImg(images[0].url)
          } catch (error) {
            SetValidImg(false);
          }
        };
    
        checkImage();
      }, []);
    
    return (
        <div>
            
            {validImg && <img className='thumbImage' src={img} alt="something went wrong"/>}
            {!validImg && <img className='NoImage' src={noImg} alt="something went wrong"/>}
       </div>
    )
}

export default ThumbNailImage;