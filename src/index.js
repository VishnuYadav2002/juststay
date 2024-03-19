import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import HotelList from './Components/Hotel-list';
// import CaroUsel from './Components/Carousel'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <NavBar/>
    <CaroUsel/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
