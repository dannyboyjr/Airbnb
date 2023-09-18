import { useParams } from "react-router-dom";
import Spot from "../components/Spot/Spot";
import Reviews from "../components/Reviews/Reviews";
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'
import './SpotPage.css'
const SpotPage = () => {
  const { id } = useParams();

  return (
    <div className="spot-page" >

      <div>
        <Spot id={id} />
        <div className="reviewsAndBookings">
        <div className="google-maps">
        <GoogleMaps id={id} />
        </div>
          <Reviews id={id} />
          
        </div>
      </div>

    </div>
  );
};

export default SpotPage;
