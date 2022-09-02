import React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";

const closeSymbol = " />";

const Navbar = () => {
  return (
    <nav>
      <h1 className={styles.navLogo}>
        Sveinssons
        <span className={styles.closeSymbol}>{closeSymbol}</span>
      </h1>
      <div className={styles.navLinks}>
        <Link to='/'>Home</Link>
        <Link to='/work'>Work</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
