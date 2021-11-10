import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleProduct = details.find(
    (product) => parseInt(product.id) === parseInt(id)
  );
  return (
    <div>
      <h3>Product Details</h3>
      <div className="row">
        <div className="col-md-7 border">
          <div className="row py-3">
            <div className="col-md-4">
              <img
                className="img-fluid image"
                src={singleProduct?.img}
                alt=""
              />
            </div>
            <div className="col-md-8 text-start">
              <h5>Id: {singleProduct?.id}</h5>
              <h2 className="text-warning">{singleProduct?.name}</h2>
              <p>{singleProduct?.description}</p>
              <h6>Price: ${singleProduct?.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
