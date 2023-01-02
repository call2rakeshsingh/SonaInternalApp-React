import React from 'react'

const FAQ = ()=>{
    return(
        <>

<div className="accordion mb-5" id="accordionExample" style={{minHeight:"300px"}}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        What is Sona Internal?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      Sona Internal is a software, recently launched for the employees of Sona Papers. Where every employee can see all their basic details like pay slip, PF, ESIC etc. Also FMS users can fill their FMS and checklist here.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Why we need Sona Internal Software?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      Complete information of every employee will be available here, so that every employee can access it anytime through user ID and password. You don't need to go HR for basic details or open multiple sheets and forms for FMS and Checklist. It is a one stop solution for all tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        What is Dashboard Section?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      In initial days you were waiting for end of month for score but here you will see your live status in form of chart. The left one (Pi Chart) is showing your current month performance report and the right one (Bar chart) is showing your 6 months performance report.
      </div>
    </div>
  </div>
</div>
</>
    );
}


export default FAQ;
