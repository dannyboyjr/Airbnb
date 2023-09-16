import './ThumbNailImage.css';
import { useState, useEffect } from "react";

const ThumbNailImage = ({ images }) => {
  const [displayImg, setDisplayImg] = useState(null);

  const prevImage = images.find((image) => image.preview === true);
  const noImg = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';

  useEffect(() => {
    if (images && images.length > 0) {
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
  }, [images]);

  return (
    <div>
      { displayImg && <img className="thumbImage" src={displayImg} alt="Preview not available" /> }
    </div>
  );
};

export default ThumbNailImage;
