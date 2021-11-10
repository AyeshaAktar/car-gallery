import React from "react";
import { Link } from "react-router-dom";

const MoreItem = (props) => {
  const { id, img, name, description, price } = props.product;
  return (
    <div class="card mb-3 p-0">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8 text-start">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <h6>Price: ${price}</h6>
            <Link to={`/details/${id}`}>
              <button type="button" className="btn details">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreItem;
