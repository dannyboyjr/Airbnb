import MyListings from "../components/MyListings/MyListings";
import MyReviewList from "../components/MyReviews/MyReviewList/MyReviewList";
import MyBookingsList from "../components/MyBookings/MyBookingsList";

const Profile = () => {
  return (
    <div className="page-layout-for-footer">
      <div>
        <MyListings />
      </div>
      <div>
        <div className="profile-layout">
            <MyBookingsList />
            
          <MyReviewList />
        </div>
      </div>

    </div>
  );
};

export default Profile;
