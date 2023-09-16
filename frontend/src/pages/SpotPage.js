import { useParams } from "react-router-dom";
import Spot from "../components/Spot/Spot";
import Reviews from "../components/Reviews/Reviews";
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'
import './SpotPage.css'
const SpotPage = () => {
  const { id } = useParams();

  return (
    <div className="page-layout-for-footer spot-page" >

      <div>
        <Spot id={id} />
        <div className="reviewsAndBookings">
          <Reviews id={id} />
          <GoogleMaps id={id} />
        </div>
      </div>

    </div>
  );
};

export default SpotPage;
