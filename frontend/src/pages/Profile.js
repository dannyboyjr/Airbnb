import MyListings from "../components/MyListings/MyListings"
import Footer from '../components/Footer/Footer'
import SpotList from "./Home"
import Reviews from "../components/Reviews/Reviews"
import MyReviewList from '../components/MyReviews/MyReviewList/MyReviewList'

const Profile = () => {

    return (
        <div className="page-layout-for-footer" >
            <div>
                <h3>My Listings</h3>
                 <MyListings />
            </div>
            <div>
                <h3>My reviews</h3>
                 <div className="reviewsAndBookings">
            <MyReviewList />
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile