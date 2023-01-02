import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer";

const HelpTicketForm = (props) => {
  const [inputVal, setInputVal] = useState({
    yourName: "",
    branchName: "",
    departName: "",
    issueType: "",
    desc: "",
  });

  const onChangeHandler = (event) => {
    setInputVal((oldData) => {
      return { ...oldData, [event.target.name]: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.pullDatas(inputVal);
    setInputVal({
      yourName: "",
      branchName: "",
      departName: "",
      issueType: "",
      desc: "",
    });
  };

  const discardFunc = () => {
    setInputVal({
      yourName: "",
      branchName: "",
      departName: "",
      issueType: "",
      desc: "",
    });
  };

  const departmentObj = {
    IT: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>Computer Software</option>
            <option>Computer Hardware</option>
            <option>Internet</option>
            <option>SAP</option>
            <option>Email/ Drive</option>
            <option>CCTV Camera</option>
            <option>Landline (Intercom)</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),
    Accounts: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>GSTR1</option>
            <option>GSTR3B</option>
            <option>Bank Reco</option>
            <option>Cheque Issue</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),
    Logistics: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>Shipment Status</option>
            <option>Invoice Details</option>
            <option>Transporter Details</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),
    Collection: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>Pending Clients</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),
    Marcom: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>Swatch Book</option>
            <option>FB Post</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),

    HR: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>Salary Slip</option>
            <option>Leave</option>
            <option>Increment</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),

    FMS: (
      <div>
        <div className="col-md-12 mb-3">
          <label htmlFor="issueType" className="form-label">
            <b> Issue Type </b>
          </label>
          <select
            className="form-select"
            id="issueType"
            name="issueType"
            value={inputVal.issueType}
            onChange={onChangeHandler}
          >
            <option selected="">Choose...</option>
            <option>New Checklist</option>
            <option>Scorecard</option>
            <option>New FMS</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="desc" className="form-label">
            <b> Description </b>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Describe your problem...."
            value={inputVal.desc}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="ui container" id="formNameID">
        <form
          className="col-md-6 offset-md-3 shadow p-5 mb-5 bg-white rounded "
          id="formID"
          onSubmit={onSubmitHandler}
        >
          <h1 className="ui text-center mb-5" id="bpCreation">
            Help Ticket Form
          </h1>

          <div className="col-md-12 mb-3">
            <label htmlFor="companyName4" className="form-label">
              <b>Your Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="yourName"
              name="yourName"
              value={inputVal.yourName}
              onChange={onChangeHandler}
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
              className="form-select"
              id="branchName"
              name="branchName"
              value={inputVal.branchName}
              onChange={onChangeHandler}
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
              className="form-select"
              id="departName"
              name="departName"
              value={inputVal.departName}
              onChange={onChangeHandler}
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

          {inputVal.departName === "IT"
            ? departmentObj.IT
            : inputVal.departName === "Accounts"
            ? departmentObj.Accounts
            : inputVal.departName === "Logistics"
            ? departmentObj.Logistics
            : inputVal.departName === "Collection"
            ? departmentObj.Collection
            : inputVal.departName === "Marcom"
            ? departmentObj.Marcom
            : inputVal.departName === "HR"
            ? departmentObj.HR
            : inputVal.departName === "FMS"
            ? departmentObj.FMS
            : ""}

          <div className="container mt-5">
            <div className="row mb-3">
              <button type="submit" className="btn btn-primary col-12">
                Save
              </button>
            </div>

            <div className="row mb-5">
              <button
                type="reset"
                className="btn btn-danger col-12"
                onClick={discardFunc}
              >
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default HelpTicketForm;
