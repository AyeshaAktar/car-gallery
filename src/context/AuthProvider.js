import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState();

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const { displayName, email, photoURL } = user;
      const userInfo = {
        name: displayName,
        email,
        photo: photoURL,
      };
      setLoginUser(userInfo);
    });
  }, [auth]);
  return (
    <div>
      <AuthContext.Provider value={[loginUser, setLoginUser]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
