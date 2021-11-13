import React, { useEffect, useState } from "react";
import UserReview from "./UserReview";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://limitless-fortress-66405.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="container">
      <h2 className="my-4">User Reviews</h2>
      <div className="row">
        {reviews.map((review) => (
          <UserReview key={review._id} review={review}></UserReview>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
