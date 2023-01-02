import React from "react";
import { useState } from "react";

import Footer from '../components/Footer';


const Form = () => {
  const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  }

  return (
    <>
    <div className="ui container" id="formNameID">
   


      <form className="col-md-6 offset-md-3 shadow p-5 mb-5 bg-white rounded" id="formID" onSubmit={e => {handleSubmit(e)}}>

	  <h1 className="ui text-center mb-5" id="bpCreation">BP Creation Form</h1>

	  <div className="col-md-6 mb-3">
          <label htmlFor="creditTerms" className="form-label font-weight-bold">
            <b>Requested By</b>
          </label>
          <select id="creditTerms" className="form-select">
		  <option selected="">Choose...</option>
            <option>Sales & Marketing</option>
            <option>Direct Customer</option>
          </select>
        </div>



        <div className="col-md-12 mb-3">
          <label htmlFor="companyName4" className="form-label">
            <b>Company Name</b>
          </label>
          <input type="text" className="form-control" id="companyName4" placeholder="Enter the company name" />
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="contactPerson" className="form-label">
            <b>Contact Person</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="contactPerson"
            placeholder="Enter contact person's name"
          />
        </div>

		<div className="col-md-12 mb-3">
          <label htmlFor="inputEmail4" className="form-label">
            <b>Email</b>
          </label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Enter the email id" />
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            <b>Mobile Number</b>
          </label>
          <input
            type="number"
            className="form-control"
            id="mobileNumber"
            placeholder="Enter the mobile number"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label htmlFor="contactAddress" className="form-label">
            <b>Contact Address</b>
          </label>
          <input type="text" className="form-control" id="contactAddress" placeholder="Write the Company Address"/>
        </div>

		<div className="col-md-12 mb-3">
          <label htmlFor="gstNumber" className="form-label">
           <b> G.S.T Number </b>
          </label>
          <input type="text" className="form-control" id="gstNumber" placeholder="Write the Company's G.S.T Number" />
        </div>

        <div className="col-md-6 mb-5">
          <label htmlFor="creditTerms" className="form-label">
           <b> Credit Terms </b>
          </label>
          <select id="creditTerms" className="form-select">
            <option selected="">Choose...</option>
            <option>CAD</option>
            <option>Immediate</option>
            <option>Payment Terms - 15 Days</option>
            <option>Payment Terms - 30 Days</option>
            <option>Payment Terms - 45 Days</option>
            <option>Payment Terms - 60 Days</option>
          </select>
        </div>


        <div className='container mt-5'>
        <div className="row mb-3">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>

        <div className="row mb-3">
          <button type="reset" className="btn btn-danger">
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

export default Form;
