import React, { useEffect, useState } from 'react';
import './SpotImages.css';

const SpotImages = ({ spot }) => {
  const [displayImg, setDisplayImg] = useState(null);
  
  const noImg = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';

  useEffect(() => {
    const spotImages = spot.SpotImages;
    const prevImage = spotImages.find((image) => image.preview === true);
    
    if (prevImage) {
      fetch(prevImage.url, {
        mode: 'no-cors'
      })
      .then(() => {
        setDisplayImg(prevImage.url);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
        setDisplayImg(noImg);
      });
    } else {
      setDisplayImg(noImg);
    }
  }, [spot]);

  return (
    <div className="spotImages">
      { displayImg && <img className="previewImg" src={displayImg} alt="Preview not available" /> }
    </div>
  );
};

export default SpotImages;

