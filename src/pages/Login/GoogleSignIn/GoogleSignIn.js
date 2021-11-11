import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { useHistory, useLocation } from "react-router";

const GoogleSignIn = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={handleGoogleSignin} className="btn btn-primary">
        Sign In With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
