// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
// import CaroUsel from './Components/Carousel';
import About from './Components/About';
import NavBar from './Components/Navbar'
import Footer from './Components/footer'
import Branches from './Components/branches';
import Room from './Components/room';
import Book from './Components/Book'
import HotelBook from './Components/Hotel-book';
import HotelList from './Components/owl'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
         {/* <CaroUsel/>  */}
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/Book" element={<Book/>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Hotel-book" element={<HotelBook />} />
        </Routes>
        <Routes>
          <Route path="/branches" element={<Branches />} />
        </Routes>
        <Routes>
          <Route path="/room" element={<Room />} />
        </Routes>
        <Routes>
          <Route path="/owl" element={<HotelList />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
