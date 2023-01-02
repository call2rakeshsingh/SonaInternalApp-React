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
		<Route path='/form' element={<Form/>} />
		<Route path='/fms' element={<Fms/>} />
		<Route path='/helpTicket' element={<HelpTicket/>} />
		<Route path='/contactUs' element={<ContactUs/>} />
		<Route path='/index' element={<Dashboard />} />
		<Route path='/' element={<Dashboard />} />
	</Routes>
	</Router>
);
}

export default App;



