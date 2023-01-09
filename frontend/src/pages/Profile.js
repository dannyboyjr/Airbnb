import MyListings from "../components/MyListings/MyListings"


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
            
        </div>
    )
}

export default Profile