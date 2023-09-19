import React from 'react';
import { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import pin from '../../assets/maps-and-flags.png';  // Import your logo
import { useDispatch,useSelector } from "react-redux";
import { loadSpotById } from "../../store/spotByIdStore";
import './GoogleMaps.css'
const Marker = () => (

  <div style={{ position: 'absolute', transform: 'translate(-50%, -100%)' }}>
    <img 
      src={pin}
      alt="marker"
      style={{
        height: '40px',
        width: '40px',
      }}
    />
  </div>
);

const GoogleMaps = ({id}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spotById);
  useEffect(() => {
    dispatch(loadSpotById(id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    
    <div className='google-maps'>
      {isLoaded && (
      <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}

        defaultCenter={{
          lat: spot.lat,
          lng: spot.lng,
        }}
        defaultZoom={13}
      >
        <Marker
          lat={spot.lat}
          lng={spot.lng}
        />
      </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMaps;

