import React from "react";
import Footer from "../../components/Footer";

function HelpTicketData(props) {
  return (
    <>
    <div className="container mb-5" id="YourTicketTable">
      <div className="row">
        <table
          data-toggle="table"
          className="mb-5 col-12"
          style={{ border: "1px solid gray" }}
        >
          <thead>
            <tr style={{ border: "1px solid gray" }}>
              <th style={{ paddingLeft: "10px" }}>Raised By</th>
              <th>Branch Name</th>
              <th>Assistance With</th>
              <th>Issue Type</th>
              <th className="col-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.ticketDataArray.map((val, index) => {
              return (
                <>
                  <tr style={{ border: "1px solid gray" }}>
                    <td style={{ paddingLeft: "10px" }}>{val.yourName}</td>
                    <td>{val.branchName}</td>
                    <td>{val.departName}</td>
                    <td>{val.issueType}</td>
                    <td>{val.desc}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <Footer /> 
    </>
  );
}

export default HelpTicketData;
