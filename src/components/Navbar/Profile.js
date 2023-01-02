import React from 'react';
import dP from "./NvImg/dp.jpeg";
import dP2 from "./NvImg/dp2.jpeg";

function Profile() {
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
}

export default Profile
