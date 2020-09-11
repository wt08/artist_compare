import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="homeIcon"/>
      </Link>
    </div>
  );
};

export default Nav;
