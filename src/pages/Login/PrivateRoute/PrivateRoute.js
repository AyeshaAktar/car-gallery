import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../../context/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
