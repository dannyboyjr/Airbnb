import MyListings from "../components/MyListings/MyListings"
import Footer from '../components/Footer/Footer'
import SpotList from "./Home"
import Reviews from "../components/Reviews/Reviews"
import MyReviewList from '../components/MyReviews/MyReviewList/MyReviewList'

const Profile = () => {

    return (
        <div className="page-layout-for-footer" >
            <div>
                 <MyListings />
            </div>
            <div>

                 <div className="reviewsAndBookings">
            <MyReviewList />
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile