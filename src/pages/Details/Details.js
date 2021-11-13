import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(`https://limitless-fortress-66405.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  // console.log(id);
  return (
    <div className="container">
      <h3 className="my-5">Product Details</h3>

      <div className="row">
        <div className="col-md-8">
          <div className="px-5 px-sm-0 px-md-5">
            <div className="text-center">
              <img className="img-fluid image w-50" src={details?.img} alt="" />
            </div>
            <h2 className="text-warning">{details?.name}</h2>
            <p>{details?.description}</p>
          </div>
        </div>
        <div class="col-md-4 h-50">
          <div className="card">
            <div class="card-header">Featured</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Body Style: {details?.features?.bodyStyle}
              </li>
              <li class="list-group-item">
                Engine: {details?.features?.engine}
              </li>
              <li class="list-group-item">
                Fuel Type: {details?.features?.fuelType}
              </li>
              <li class="list-group-item">
                Fuel Mileage: {details?.features?.fuelMileage}
              </li>
              <li class="list-group-item">
                Condition: {details?.features?.condition}
              </li>
              <li class="list-group-item">
                Warenty: {details?.features?.warenty}
              </li>
              <li class="list-group-item">Price: ${details?.price}</li>
            </ul>
          </div>
          <Link to={`/orderNow/${id}`}>
            <button type="button" className="btn btn-warning">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
