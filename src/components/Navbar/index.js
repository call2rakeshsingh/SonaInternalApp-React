import React from "react";
import { NavLink } from "./NavbarElements";
import companyLogo from "./sona_logo.png";
import dP from "./dp.jpeg";
import dP2 from "./dp2.jpeg";

const ProfileDiv = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "purple",
    fontWeight: "bold",
    height: "100px",
  };

  return (
    <>
      <div className="profileDiv fixed-top">
        <div>
          <div
            className="rounded-circle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            style={{
              height: "66px",
              border: "1px solid white",
              backgroundImage: `url(${dP2})`,
              backgroundRepeat: "no-repeat",
              width: "50px",
              height: "50px",
            }}
          ></div>
        </div>

        <div
          className="offcanvas offcanvas-end forZindex"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header row-12" style={mystyle}>
            <h5
              className="offcanvas-title col-7"
              id="offcanvasWithBothOptionsLabel"
              style={{ backgroundColor: "purple", fontWeight: "bold" }}
            >
              Rakesh Kumar Singh
            </h5>
            <div
              className="rounded-circle"
              style={{
                height: "66px",
                border: "2px solid white",
                backgroundImage: `url(${dP})`,
                backgroundRepeat: "no-repeat",
                width: "65px",
              }}
            ></div>
            <button
              type="button"
              className="btn-close btn bg-danger col-1"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            />
          </div>

          <div
            className="offcanvas-body container-fluid "
            style={{ backgroundColor: "rgb(234, 234, 234)" }}
          >
            <div className="row" style={{ marginTop: "-15px" }}>
              <button
                className="btnProfile col-lg-12 mb-0"
                style={{ borderColor: "rgb(227, 227, 227)", height: "70px" }}
              >
                Basic Info
              </button>
              <button
                className=" btnProfile col-lg-12 mb-0"
                style={{ borderColor: "rgb(227, 227, 227)", height: "70px" }}
              >
                Salary Slip
              </button>
              <button
                className=" btnProfile col-lg-12 mb-0"
                style={{ borderColor: "rgb(227, 227, 227)", height: "70px" }}
              >
                Employee PF
              </button>
              <button
                className=" btnProfile col-lg-12 mb-0"
                style={{ borderColor: "rgb(227, 227, 227)", height: "70px" }}
              >
                Employee ESIC
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
                  <NavLink to="/index" activeStyle className="nav-link">
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
                  <NavLink to="/form" activeStyle className="nav-link">
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
                  <NavLink to="/fms" activeStyle className="nav-link">
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
                  <NavLink to="/helpTicket" activeStyle className="nav-link">
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
                  <NavLink to="/contactUs" activeStyle className="nav-link">
                    <div
                      className="marginInLi"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      Help
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ProfileDiv />
      </div>
    </>
  );
};

export default Navbar;
