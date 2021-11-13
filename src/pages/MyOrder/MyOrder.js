import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { AuthContext } from "../../context/AuthProvider";

const MyOrder = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ordersEmail?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [loginUser.email]);

  console.log(orderList);
  // const handleCancle = (id) => {};

  return (
    <div className="mybooking my-order">
      <div className="container my-5">
        <h2 className="mb-5">My Orders</h2>
        {orderList.map((order) => (
          <div>
            <div className="row pb-3 mb-3 border-bottom">
              <div className="col-md-4">
                <img className="img-fluid activitie" src={order?.img} alt="" />
              </div>
              <div className="col-md-8 text-start">
                <h4>{order?.name}</h4>
                <h6>Price: ${order?.price}</h6>
                <p>
                  <strong>Order Id:</strong> {order?._id}
                </p>
                <button className="btn btn-danger">cancle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
