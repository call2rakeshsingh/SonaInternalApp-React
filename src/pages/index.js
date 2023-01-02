import React from 'react';

import piChart from "./piChart.svg";
import barChart from "./barChart.png";
import Footer from '../components/Footer';


function TotalAssignWorkDashboard() {
	return (
	  <>
	 	<div className="container-fluid">
		<div id="inTextNumber" >
		  <table className='col-lg-9 col-12'>
			<tr >
			  <th>Task Name</th>
			  <th className="quantityCenter">Qunatity</th>
			</tr>
			<tr>
			  <td>Total asigned work</td>
			  <td className="quantityCenter">
				<a href="#">60</a>
			  </td>
			</tr>
			<tr>
			  <td>Total completed work</td>
			  <td className="quantityCenter">
				<a href="#">50</a>
			  </td>
			</tr>
			<tr>
			  <td>Total Pending work</td>
			  <td className="quantityCenter">
				<a href="#">10</a>
			  </td>
			</tr>
		  </table>
		</div>

</div>
	  </>
	);
  }

  function PendingTaskName() {
	return (
	  <>
		<div >
		  <p className='d-flex justify-content-center dTaskNameHeading text-danger'>Pending FMS Name</p>
		  <div className='btnContainer row d-flex justify-content-center'>
		  <input
			type="button"
			value="Monthly Balance Sheet FMS"
			className="btn1"
		  />
		  <br />
		  <input
			type="button"
			value="Admin Purchase & Payment FMS"
			className="btn1"
		  />
		  <br />
		  <input type="button" value="Monthly Checklist" className="btn1" />
		  </div>
		</div>
  
  
		
	  </>
	);
  }


  function UpcomingTaskName() {
	return (
	  <>
		<div className='text-align-center'>
		  <p className='d-flex justify-content-center dTaskNameHeading text-success'>Upcoming FMS Name</p>
		  <div className='d-flex justify-content-center'>

		
		  <input
			type="button"
			value="Quarterly Balance Sheet FMS"
			className="btn1 btnUpComing"
		  />
		</div>
		  
		</div>
	  </>
	);
  }


const GridSec = () => {
	return(
		<>
		{/* Main Container */}
		<div className='container-fluid bg-light border' id='gridSec'>

		<div className='row'>
		{/* Dashboard Graph and Score*/}

		<div className='col-md-6'>
		<div className='row'>

		{/* Pi Chart */}
		<div className="col-6 col-md-12 col-lg-6 border chartAndGraph d-flex justify-content-center align-items-center">
		  <img src={piChart} className="img-fluid piChart" alt="No" />
		</div>


		{/* Bar Chart */}
		<div className="col-6 col-md-12 col-lg-6 border chartAndGraph d-flex justify-content-center align-items-center">
		<img src={barChart} className="barChart img-fluid barChart" alt="No" />
		</div>
		</div>

		{/* Score in Numbers */}
		<div className='row border'>
		<div className='d-flex justify-content-center align-items-center chartAndGraph'>
		<TotalAssignWorkDashboard />
		</div>
		</div>
		</div>


		{/* Pending FMS Name */}
		<div className='col-md-6 border'>
		<div className="row">
		<div className="col-6 col-md-12 border pendingTaskSection order-2 order-sm-1">
		<PendingTaskName />
		</div>
		<div className="col-6 col-md-12 border pendingTaskSection order-1 order-sm-1">
		<UpcomingTaskName />
		</div>
		</div>
		</div>
		</div>
		</div>
		</>
	);

}

const Dashboard = () => {
return (
	<div>
	<GridSec />
	<Footer />
	</div>
);
};

export default Dashboard;
