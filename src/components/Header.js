import React from "react";
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MoviePile</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watch Pile</Link>
            </li>
            <li>
              <Link to="/Watched">Watched</Link>
            </li>
            <li>
              <Link to="/Add" className="btn">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
