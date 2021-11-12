import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, img, name, description } = props.product;

  return (
    <div className="col-md-4">
      <div className="card m-3 product-card shadow">
        <img src={img} className="card-img-top product-img" alt="..." />
        <div className="card-body text-start">
          <h5 className="card-title">{name}</h5>

          <p className="card-text">{description.slice(0, 100)}...</p>
          <Link to={`/details/${_id}`}>
            <button type="button" className="btn details">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
