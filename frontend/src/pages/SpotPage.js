import { useParams } from "react-router-dom";
import Spot from '../components/Spot/Spot'
import Reviews from "../components/Reviews/Reviews";
import BookingsForm from "../components/Bookings/BookingsForm/BookingsForm";
import ReviewList from "../components/Reviews/ReviewList/ReviewList";

const SpotPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Spot id={id} />
            <div className="reviewsAndBookings">
            <ReviewList id={id}/>
            <BookingsForm id={id}/>
            </div>
        </div>
        )
}



export default SpotPage;


