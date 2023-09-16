import EditReview from "../components/Reviews/EditReview/EditReview";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSpotById } from "../store/spotByIdStore";
import { useParams } from "react-router-dom";

const EditReviewPage = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const spotbyId = useSelector((state) => state.spotById);
  const spotReviews = spotbyId.Reviews
  let sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  let review;
  if (spotReviews && sessionUser) {
    review = spotReviews.filter((review) => sessionUser.id === review.userId);

  }

  useEffect(() => {
    dispatch(loadSpotById(spotbyId.id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="page-layout-for-footer">
      <div>
        {isLoaded && <EditReview review={review[0]} />}
      </div>

    </div>
  );
};

export default EditReviewPage;
