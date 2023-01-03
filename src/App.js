import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import Form from './pages/Form/Form';
import HelpTicketForm from './pages/HelpTicket/HelpTicketForm';
import HelpTicketData from './pages/HelpTicket/HelpTicketData';
import ContactUs from './pages/ContactUs/ContactUs';
import Fms from './pages/FMS/Fms';

function App() {

	const [saveInputVal, setSaveInputVal] = useState([]);

	const pullData = (inputVal) => {
	  console.log("I am clicked");
	  setSaveInputVal((oldData) => {
		return [...oldData, inputVal];
	  });
	};


return (
	<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='SonaInternalApp-React/' element={<Dashboard />} />
		<Route path='SonaInternalApp-React/form' element={<Form/>} />
		<Route path='SonaInternalApp-React/fms' element={<Fms/>} />
		<Route path='SonaInternalApp-React/helpticket' element={<HelpTicketForm pullDatas={pullData}/>} />
		<Route path='SonaInternalApp-React/contactus' element={<ContactUs />} />
		<Route path='SonaInternalApp-React/yourtickets' element={<HelpTicketData ticketDataArray={saveInputVal}/>} />
	</Routes>
	</BrowserRouter>
);
}

export default App;



