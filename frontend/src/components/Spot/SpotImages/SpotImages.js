import React, { useEffect, useState } from 'react';
import './SpotImages.css';

const SpotImages = ({ spot }) => {
  const [displayImg, setDisplayImg] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const noImg = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';

  useEffect(() => {
    const spotImages = spot.SpotImages;
    const prevImage = spotImages.find((image) => image.preview === true);
    const nonPreviewImages = spotImages.filter((image) => !image.preview).slice(0, 4);

    setAdditionalImages(nonPreviewImages);

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

  const placeholders = 4 - additionalImages.length;
  const positionClasses = ["top-left-thumb-nail", "top-right-thumb-nail", "bottom-left-thumb-nail", "bottom-right-thumb-nail"];

  return (
    <div className="spot-photos">
      { displayImg && <img className="previewImg" src={displayImg} alt="Preview not available" /> }

      <div className="thumb-nail-container">
        {additionalImages.map((img, index) => {
          const positionClass = positionClasses[index];
          return (
            <img key={index} className={`thumb-nail-photos ${positionClass}`} src={img.url} alt={`Additional ${index + 1}`} />
          );
        })}

        {Array.from({ length: placeholders }).map((_, index) => {
          const positionClass = positionClasses[additionalImages.length + index];
          return (
            <div key={additionalImages.length + index} className={`thumb-nail-photos ${positionClass} placeholder`}></div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotImages;



