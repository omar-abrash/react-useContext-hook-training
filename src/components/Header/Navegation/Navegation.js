import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";

import Button from "../../UI/Button/Button";
import styles from "./Navegation.module.css";

const Navegation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.logInState && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.logInState && (
          <li>
            <a href="/">User</a>
          </li>
        )}
        {ctx.logInState && (
          <li>
            <Button className={styles.btn} onClick={ctx.onLogOut}>
              Log out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navegation;
