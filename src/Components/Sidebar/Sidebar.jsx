import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../../assets/images/about-BgAkqdr2.jpg";

export default function Sidebar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white quicksand">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid d-block text-center">
              <div className="d-block">
                <img
                  src={pic}
                  className="user-pic d-block rounded-circle m-auto py-1 mt-5"
                  alt="user photo"
                />
                <NavLink className="navbar-brand" to="/">
                 <h4 className=" Playfair700 fontsize22">Jackson Ford</h4>
                </NavLink>
                <p className="m-auto text-uppercase quicksand400">
                  <span className="text-babyblue ">UI/UX/Designer</span> in
                  Philippines
                </p>
              </div>
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-block py-3 text-uppercase quicksand500">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/skills">
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/experience">
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/work">
                    Work
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
