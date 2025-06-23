import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active text-primary fw-bold" : " text-white");

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4 text-white ms-2">Solanki Milan</span>
        </NavLink>

        <ul className="nav nav-pills align-items-center mb-0">
          <li className="nav-item">
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
