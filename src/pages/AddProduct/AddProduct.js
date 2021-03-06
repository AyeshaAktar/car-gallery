import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const {
      name,
      description,
      price,
      img,
      bodyStyle,
      engine,
      fuelType,
      fuelMileage,
      condition,
      warenty,
    } = data;
    const pdData = {
      name,
      description,
      price,
      img,
      features: {
        bodyStyle,
        engine,
        fuelType,
        fuelMileage,
        condition,
        warenty,
      },
    };
    console.log(pdData);
    axios
      .post("https://limitless-fortress-66405.herokuapp.com/products", pdData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("add successfully");
          reset();
        }
      });
  };

  return (
    <div className="my-5 add-camping">
      <h2 className="mb-4">Add A New Product</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("name", { required: true, maxLength: 50 })}
              placeholder="Name"
            />
          </div>
          <div className="mb-2">
            <textarea
              className="w-50"
              {...register("description")}
              placeholder="Description"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              type="number"
              {...register("price")}
              placeholder="Price"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("img")}
              placeholder="Image URL"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("bodyStyle")}
              placeholder="Body Style"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("engine")}
              placeholder="Engine"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("fuelType")}
              placeholder="Fuel Type"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("fuelMileage")}
              placeholder="Fuel Mileage"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("condition")}
              placeholder="Condition"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-50"
              {...register("warenty")}
              placeholder="Warenty"
            />
          </div>
          <input className="w-25" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
