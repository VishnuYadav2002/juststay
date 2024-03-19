import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Navbar.css';

function CaroUsel() {
  const [startDate1, setStartDate1] = useState(null);
  const [startDate2, setStartDate2] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [carouselImages, setCarouselImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://www.juststays.in/admin/user/slider');
        if (!response.ok) {
          throw new Error('Failed to fetch images: ' + response.statusText);
        }
        const responseData = await response.json();
        // Check if sliderdata exists and is not empty
        if (responseData.sliderdata && responseData.sliderdata.length > 0) {
          const imageUrls = responseData.sliderdata.map(item => item.image);
          setCarouselImages(imageUrls);
        } else {
          setError('No images found.');
        }
      } catch (error) {
        setError('Error fetching images: ' + error.message);
      }
    };

    fetchImages();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log('Search value:', searchValue);
  };

  return (
    <>
      {error && <div>Error: {error}</div>}
      <Carousel interval={2000}>
        {carouselImages.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={imageUrl} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input 
            type="search" 
            value={searchValue} 
            onChange={handleSearchChange} 
            placeholder="Search..." 
          />
          <DatePicker 
            selected={startDate1} 
            onChange={(date) => setStartDate1(date)} 
            placeholderText="Check In" 
            className="textbox-n" 
          />
          <DatePicker 
            selected={startDate2} 
            onChange={(date) => setStartDate2(date)} 
            placeholderText="Check Out" 
            className="textbox-n" 
          />
          <button className='submit-btn' type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CaroUsel;
