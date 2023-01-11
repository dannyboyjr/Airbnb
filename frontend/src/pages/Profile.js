import MyListings from "../components/MyListings/MyListings"
import MyReviewList from '../components/MyReviews/MyReviewList/MyReviewList'

const Profile = () => {

    return (
        <div>
            <div>
                <h3>My Bookings</h3>
                <p>My bookings sections</p>
            </div>

            <div>
                <h3>My Listings</h3>
                 <MyListings />
            </div>
            <div>
                <h3>My reviews</h3>
                 <MyReviewList />
            </div>
            
        </div>
    )
}

export default Profile