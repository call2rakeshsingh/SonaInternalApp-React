import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";

const HelpTicket = (props) => {
  const [contactInfo, setContactInfo] = useState({
    raisedBy: "",
    branchName: "",
    departName: "",
    issueType: "",
    desc: "",
  });

  const [formValues, setFormValues] = useState([]);

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();

    console.log(contactInfo);

    setFormValues((prevFormValues) => [...prevFormValues, contactInfo]);

    setContactInfo({
      raisedBy: "",
      branchName: "",
      departName: "",
      issueType: "",
      desc: "",
    });
  };

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  });

  console.log(formValues);

  return (
    <>
      <div className="ui container" id="formNameID">
        <form
          className="col-md-6 offset-md-3 shadow p-5 mb-5 bg-white rounded"
          id="formID"
          onSubmit={handleSubmit}
        >
          <h1 className="ui text-center mb-5" id="bpCreation">
            Help Ticket Form
          </h1>

          <div className="col-md-12 mb-3">
            <label htmlFor="companyName4" className="form-label">
              <b>Raised By</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName4"
              placeholder="Enter your name"
              name="raisedBy"
              onChange={handleChange}
              value={contactInfo.raisedBy}
            />
          </div>

          <div className="col-md-12 mb-3">
            <label
              htmlFor="creditTerms"
              className="form-label font-weight-bold"
            >
              <b>Branch Name</b>
            </label>
            <select
              id="creditTerms"
              className="form-select"
              value={contactInfo.branchName}
              name="branchName"
              onChange={handleChange}
            >
              <option selected="">Choose...</option>
              <option>Head Office</option>
              <option>Delhi</option>
              <option>Naraina</option>
              <option>Jaipur</option>
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
              <option>Pulp Society</option>
              <option>White Aurum</option>
            </select>
          </div>

          <div className="col-md-12 mb-3">
            <label
              htmlFor="assistanceDepartment"
              className="form-label font-weight-bold"
            >
              <b>Assistance required with which department of Head Office</b>
            </label>
            <select
              id="assistanceDepartment"
              className="form-select"
              value={contactInfo.departName}
              name="departName"
              onChange={handleChange}
            >
              <option selected="">Choose...</option>
              <option>IT</option>
              <option>Accounts</option>
              <option>Logistics</option>
              <option>Collection</option>
              <option>Marcom</option>
              <option>HR</option>
              <option>FMS</option>
            </select>
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="contactAddress" className="form-label">
              <b> Issue Type </b>
            </label>
            <input
              type="text"
              className="form-control"
              id="contactAddress"
              placeholder="Write the type of problem...."
              name="issueType"
              value={contactInfo.issueType}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-4">
            <label htmlFor="gstNumber" className="form-label">
              <b> Description </b>
            </label>
            <textarea
              className="form-control"
              id="gstNumber"
              name="desc"
              rows="3"
              placeholder="Describe your problem...."
              value={contactInfo.desc}
              onChange={handleChange}
            />
          </div>

          <div className="container mt-5">
            <div className="row mb-3">
              <button type="submit" className="btn btn-primary col-12">
                Save
              </button>
            </div>

            <div className="row mb-5">
              <button type="reset" className="btn btn-danger col-12">
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
      <div className="row">
        <table data-toggle="table" className="mb-5 col-12">
          <thead>
            <tr>
              <th>Raised By</th>
              <th>Branch Name</th>
              <th>Assistance With</th>
              <th>Issue Type</th>
              <th className="col-3">Description</th>
            </tr>
          </thead>
          <tbody>
          {formValues.map(item => {
      return (
        <tr>
          <td>{ item.raisedBy }</td>
          <td>{ item.branchName }</td>
          <td>{ item.departName }</td>
          <td>{ item.issueType }</td>
          <td>{ item.desc }</td>
        </tr>
      );
    })}
          </tbody>
        </table>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpTicket;
