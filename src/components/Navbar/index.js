import React from "react";
import { NavLink } from "react-router-dom";
import companyLogo from "./NvImg/sona_logo.png";
import Profile from "./Profile";




const Navbar = () => {
  return (
    <>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
          <div className="container-fluid navHeight">
            <div className="logoDiv navbar-brand">
              <a
                href="https://www.sonapapers.com/"
                target="--blank"
                className="logo"
              >
                <img src={companyLogo} className="logo img-fluid" alt="No" />
              </a>
            </div>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse marginID"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Dashboard
                    </div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/form" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Form
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/fms" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      FMS
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/helpticket" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Help Ticket
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/contactus" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Help
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="SonaInternalApp-React/yourtickets" className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Your Tickets
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Profile />
      </div>
    </>
  );
};

export default Navbar;
