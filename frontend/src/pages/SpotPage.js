import { useParams } from "react-router-dom";
import Spot from '../components/Spot/Spot'
import Reviews from "../components/Reviews/Reviews";
import BookingsForm from "../components/Bookings/BookingsForm/BookingsForm";


const SpotPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Spot id={id} />
            <div className="reviewsAndBookings">
            <Reviews id={id} />
            </div>
        </div>
        )
}



export default SpotPage;


