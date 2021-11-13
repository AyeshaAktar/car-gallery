import React from "react";
import Banner from "../Banner/Banner";
import LatestNews from "../LatestNews/LatestNews";
import Products from "../Products/Products";
import UserReviews from "../UserReview/UserReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <LatestNews></LatestNews>
      <UserReviews></UserReviews>
    </div>
  );
};

export default Home;
