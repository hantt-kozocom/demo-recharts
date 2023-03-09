import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link className="active" to={"/"}>
            Line Chart
          </Link>
        </li>
        <li>
          <Link to={"/area-chart"}>Area Chart</Link>
        </li>
        <li>
          <Link to={"/bar-chart"}>Bar Chart</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
