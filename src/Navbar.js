import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 700 : 400,
    };
  };
  return (
    <nav>
      <NavLink style={styles} to="/">
        Home
      </NavLink>
      <NavLink style={styles} to="/about">
        About
      </NavLink>
      <NavLink style={styles} to="/details">
        Details
      </NavLink>
    </nav>
  );
}

export default Navbar;
