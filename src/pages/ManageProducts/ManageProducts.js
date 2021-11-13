import React, { useEffect, useState } from "react";
import "./ManageProducts.css";
import { AiFillDelete } from "react-icons/ai";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch("https://limitless-fortress-66405.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, [manageProducts]);
  // console.log(manageProducts);

  const handleDelete = (id) => {
    const url = `https://limitless-fortress-66405.herokuapp.com/deleteProducts/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Are you sure you want to delete the products?");
        }
      });
  };

  return (
    <div className="container manage-products">
      <h2 className="my-5">Manage All Products</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts.map((product) => (
            <tr>
              <td>{product?._id}</td>
              <td>{product?.name}</td>

              <td>
                <button
                  className="btn"
                  key={product._id}
                  onClick={() => handleDelete(product?._id)}
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
