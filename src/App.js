import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import LogInForm from "./components/LogInForm/LogInForm";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const userDataHandler = (userName, passWord) => {
    // console.log("In App", userName, passWord);
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const logOutHandler = (logOutState) => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const logOutHomeHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <AuthContext.Provider
      value={{ logInState: isLoggedIn, onLogOut: logOutHandler }}
    >
      <Header />
      {!isLoggedIn && <LogInForm afterEnteredData={userDataHandler} />}
      {isLoggedIn && <Home onLogOut={logOutHomeHandler} />}
    </AuthContext.Provider>
  );
}

export default App;
