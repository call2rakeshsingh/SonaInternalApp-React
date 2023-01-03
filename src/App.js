import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route} from 'react-router-dom';
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
	<HashRouter>
	<Navbar />
	<Routes>
		<Route exact path= '/' element={<Dashboard />} />
		<Route exact path= '/form' element={<Form/>} />
		<Route exact path= '/fms' element={<Fms/>} />
		<Route exact path= '/helpticket' element={<HelpTicketForm pullDatas={pullData}/>} />
		<Route exact path= '/contactus' element={<ContactUs />} />
		<Route exact path= '/yourticket' element={<HelpTicketData ticketDataArray={saveInputVal}/>} />
	</Routes>
	</HashRouter>
);
}

export default App;



