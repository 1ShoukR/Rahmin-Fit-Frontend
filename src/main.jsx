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



const store = createStore(applyMiddleware(logger)); //put rootReducer before applyMiddleware 



ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path='/free_consultation' element={<FreeConsultation/>} />
				{/* <Route path='/train' element={} /> */}
				{/* <Route path='/compare' element={} /> */}
				{/* <Route path='/why_rahmin_fit' element={} /> */}
				{/* <Route path='/gallery' element={} /> */}
				{/* <Route path='/refund_policy' element={} /> */}
				{/* <Route path='/contact' element={} /> */}
			</Routes>
		</Provider>
	</BrowserRouter>
);
