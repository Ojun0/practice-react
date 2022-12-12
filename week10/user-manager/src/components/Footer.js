import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import styles from "../styles/Footer.module.css";

function Footer({ copyright }) {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <h3 className={styles.title}>{copyright}</h3>
      <button onClick={() => changeTheme()}>테마변경</button>
    </div>
  );
}

export default Footer;
