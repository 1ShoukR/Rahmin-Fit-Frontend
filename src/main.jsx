import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Navbar from '../components/Navbar';

// import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FreeConsultation from '../components/freeConsultation';
import Train from '../components/Train';
import Compare from '../components/Compare';
import WhyRahminFit from '../components/WhyRahminFit';
import Gallery from '../components/Gallery';
import RefundPolicy from '../components/RefundPolicy';
import Contact from '../components/Contact';


const store = createStore(applyMiddleware(logger)); //put rootReducer before applyMiddleware 



ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path='/free_consultation' element={<FreeConsultation />} />
				<Route path='/train' element={<Train />} />
				<Route path='/compare' element={<Compare />} />
				<Route path='/why_rahmin_fit' element={<WhyRahminFit />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/refund_policy' element={<RefundPolicy />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Provider>
	</BrowserRouter>
);
