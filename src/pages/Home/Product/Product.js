import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, img, name, description } = props.product;
  return (
    <div className="col-md-4">
      <div className="card m-3">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-start">
          <h4>Id: {id}</h4>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 100)}...</p>
          <Link to={`/bookNow/${id}`}>
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
