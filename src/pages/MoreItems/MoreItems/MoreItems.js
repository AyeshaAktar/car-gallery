import React, { useEffect, useState } from "react";
import MoreItem from "../MoreItem/MoreItem";

const MoreItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2>All Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <MoreItem key={product._id} product={product}></MoreItem>
        ))}
      </div>
    </div>
  );
};

export default MoreItems;
