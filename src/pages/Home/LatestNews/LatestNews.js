import React from "react";
import "./LatestNews.css";
import lexus from "../../../images/latest-news/lexus.jpg";
import jeep from "../../../images/latest-news/jeep.jpg";
import tesla from "../../../images/latest-news/tesla.png";

const LatestNews = () => {
  return (
    <div className="container">
      <h2>Letest News</h2>
      <div class="row row-cols-1 row-cols-md-3 g-5 my-3">
        <div class="col">
          <div class="card">
            <img src={lexus} class="card-img-top letest-news" alt="..." />
            <div class="card-body">
              <h3 class="card-title text-warning">Lexus RX350</h3>
              <h6></h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={jeep} class="card-img-top letest-news" alt="..." />
            <div class="card-body">
              <h3 class="card-title text-warning">Jeep Wrangler</h3>
              <h6></h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={tesla} class="card-img-top letest-news" alt="..." />
            <div class="card-body">
              <h3 class="card-title text-warning">Tesla Model Y</h3>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
