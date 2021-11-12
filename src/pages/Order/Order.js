import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Order = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [loginUser, setLoginUser] = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //   console.log(id);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, description, price, img, features } = details;
    const orderData = {
      name,
      description,
      price,
      img,
      features,
      ...data,
      orderStatus: "pending",
    };
    console.log(orderData);
    axios.post("http://localhost:5000/orders", orderData).then((res) => {
      if (res.data.insertedId) {
        alert(
          `booking successfully. Please review this product ${history.push(
            "/review"
          )}`
        );
      }
    });
  };
  return (
    <div>
      <div className="container">
        <h2 className="my-5">Place Order</h2>

        <div className="row">
          <div className="">
            <h2>Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <input
                  defaultValue={loginUser.email}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Enter Your Name"
                  defaultValue={loginUser.displayName}
                  {...register("userName", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Phone Number"
                  type="number"
                  {...register("phoneNumber", { required: true })}
                />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Conform Order" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;