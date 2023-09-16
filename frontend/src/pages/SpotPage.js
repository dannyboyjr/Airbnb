import { useParams } from "react-router-dom";
import Spot from "../components/Spot/Spot";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'

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
      <Footer />
    </div>
  );
};

export default SpotPage;
