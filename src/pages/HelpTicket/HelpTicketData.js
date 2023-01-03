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
              <th style={{ paddingLeft: "10px", border: "1px solid gray" }}>Raised By</th>
              <th style={{ border: "1px solid gray" }}>Branch Name</th>
              <th style={{ border: "1px solid gray" }}>Assistance With</th>
              <th style={{ border: "1px solid gray" }}>Issue Type</th>
              <th className="col-3" style={{ border: "1px solid gray" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.ticketDataArray.map((val, index) => {
              return (
                <>
                  <tr style={{ border: "1px solid gray" }} className="text-center">
                    <td style={{ paddingLeft: "10px" }}>{val.yourName}</td>
                    <td style={{ border: "1px solid gray" }}>{val.branchName}</td>
                    <td style={{ border: "1px solid gray" }}>{val.departName}</td>
                    <td style={{ border: "1px solid gray" }}>{val.issueType}</td>
                    <td style={{ border: "1px solid gray" }}>{val.desc}</td>
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
