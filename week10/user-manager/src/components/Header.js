import React from "react";
import styles from "../styles/Header.module.css";

function Header({ title = "No Title" }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Header;
