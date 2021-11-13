import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/admin", data).then((res) => {
      if (res.data) {
        alert("New Admin");
        reset();
      }
    });
  };
  return (
    <div className="makeAdmin">
      <h2 className="my-5">Make an Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <input
            placeholder="New Admin Email"
            {...register("email", { required: true })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
