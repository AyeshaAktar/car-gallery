import React, { useEffect, useState } from "react";
import "./ManageOrder.css";
import { AiFillDelete } from "react-icons/ai";
import ManageOrderStatus from "./ManageOrderStatus";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, [manageOrder]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/deleteOrder/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Are You sure??");
        }
      });
  };
  return (
    <div className="container manage-order">
      <h2 className="my-5">Manage all orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Product Name</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageOrder.map((order) => (
            <tr>
              <td>{order?.userName}</td>
              <td>{order?.phoneNumber}</td>
              <td>{order?.name}</td>
              <td>
                <ManageOrderStatus
                  status={order?.orderStatus}
                  orderId={order?._id}
                ></ManageOrderStatus>
              </td>
              <td>
                <button
                  className="btn"
                  key={order._id}
                  onClick={() => handleDelete(order?._id)}
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

export default ManageOrder;
