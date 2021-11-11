import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const getInputValue = (e) => {
    const getValue = { ...user };
    getValue[e.target.name] = e.target.value;
    setUser(getValue);
  };

  const handleSignUp = (e) => {
    if (user.name !== "" && user.email !== "" && user.password !== "") {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setSuccess("Signup success");
          setErrorMsg("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          setSuccess("");
        });
    }
    e.preventDefault();
  };

  return (
    <div className="my-5 container">
      <h2 className="mb-4">SignUp Page</h2>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <form onSubmit={handleSignUp}>
        <div className="row mb-3">
          <div className="col-12 mb-2 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="text"
              className="form-control w-50"
              placeholder="User Name"
              name="name"
              required
            />
          </div>
          <div className="col-12 mb-2 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="email"
              className="form-control w-50"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="password"
              className="form-control w-50"
              placeholder="Enter Your Password"
              name="password"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <div>
        <h6>Already has an account??</h6>
        <Link to="/signIn">
          <button className="btn btn-primary">Go to SignIn</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
