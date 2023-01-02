import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Dashboard from './pages/index';
import Form from './pages/form';
import HelpTicket from './pages/helpTicket';
import ContactUs from './pages/contactUs';
import Fms from './pages/fms';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='SonaInternalApp-React/' element={<Dashboard />} />
		<Route path='SonaInternalApp-React/form' element={<Form/>} />
		<Route path='SonaInternalApp-React/fms' element={<Fms/>} />
		<Route path='SonaInternalApp-React/helpTicket' element={<HelpTicket/>} />
		<Route path='SonaInternalApp-React/contactUs' element={<ContactUs/>} />
		<Route path='SonaInternalApp-React/index' element={<Dashboard />} />
	</Routes>
	</Router>
);
}

export default App;



