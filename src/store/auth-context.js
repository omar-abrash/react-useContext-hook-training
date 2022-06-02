import React from "react";

const AuthContext = React.createContext({
  logInState: false,
  onLogOut: () => {},
});

export default AuthContext;
