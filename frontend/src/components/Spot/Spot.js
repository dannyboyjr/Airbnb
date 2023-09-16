import "./Spot.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSpotById } from "../../store/spotByIdStore";
import { deleteASpotById } from "../../store/spots";
import { useHistory } from "react-router-dom";
import SpotImages from "../Spot/SpotImages/SpotImages";
import calendarLogo from "../../assets/calendar.png";
import locationLogo from "../../assets/location.png";
import BookingsForm from "../Bookings/BookingsForm/BookingsForm"
import medalLogo from "../../assets/medal-.png";
const Spot = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const spotById = useSelector((state) => state.spotById);
  let sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();

  function getRandomFutureDate() {
    const today = new Date();
    const futureDate = new Date(today);
    const minimumDaysToAdd = 30;
    const additionalRandomDays = Math.floor(Math.random() * 31);
    futureDate.setDate(
      today.getDate() + minimumDaysToAdd + additionalRandomDays
    );
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[futureDate.getMonth()];
    const day = futureDate.getDate();
    return `${month} ${day}`;
  }
  const randomFutureDate = getRandomFutureDate();

  useEffect(() => {
    dispatch(loadSpotById(id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleDelete = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete your listing?"
    );

    if (isConfirmed) {
      // If the user confirms, proceed with the deletion
      dispatch(deleteASpotById(id));
      history.push(`/`);
    }
  };

  const handleEdit = () => {
    history.push(`/spots/${id}/edit`);
  };

  return (
    <div>
      {isLoaded && (

        <div className="SpotbyId">
          <h1 className="spotByIdName">{spotById.name}</h1>
          <div className="spotInfo">
            <div><span className="star">&#9733;</span>{" "}{Math.round(spotById.averageStars * 100) / 100} </div>
            <div>{spotById.totalReviews} reviews</div>
            <div> Superhost </div>
            <div>
              {spotById.city}, {spotById.state}, {spotById.country}
            </div>
            {spotById.userId === sessionUser.id && (
              <div>
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
              </div>
            )}
          </div>
          <div className="spot-photos">
            <SpotImages spot={spotById} />
          </div>


        <div className="info-and-bookings">
                <div>
          <h2 className="hostedBy">
            Hosted by {spotById.User.firstName} {spotById.User.lastName}
          </h2>
          <div className="gray-line"> </div>
          <div className="additional-spot-info">
            <div>
              <img src={medalLogo} alt="Cal" className="icon" />
              <p>{spotById.User.firstName} is a Superhost</p>
            </div>

            <div>
              <img src={locationLogo} alt="Cal" className="icon" />
              <p>Great Location</p>
            </div>
            <div>
              <img src={calendarLogo} alt="Cal" className="icon" />
              <p> Free Cancellations before {randomFutureDate}</p>
            </div>
          </div>
          <div className="gray-line"> </div>

          <div className="descriptionSection">
            <span className="priceById">
              <p>Description</p>
            </span>
            <p className="description">
            {spotById.description}
            </p>
          </div>
          
          </div>
          <div className="booking">
          <BookingsForm id={id} />
          </div>
        </div>

        </div>)}

    </div>
  );
};

export default Spot;
