import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CaroUsel from './Carousel';

function Home() {
  const [recentHotels, setRecentHotels] = useState([]);
  const [recommendedHotels, setRecommendedHotels] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [topRatedHotels, setTopRatedHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentHotels = async () => {
      try {
        const response = await fetch('https://www.juststays.in/admin/hotel/getrecenthotels');
        if (!response.ok) {
          throw new Error('Failed to fetch recent hotels: ' + response.statusText);
        }
        const data = await response.json();
        setRecentHotels(data.data);
      } catch (error) {
        console.error('Error fetching recent hotels: ', error);
        setError(error);
      }
    };

    const fetchRecommendedHotels = async () => {
      try {
        const response = await fetch('https://www.juststays.in/admin/hotel/getnewhotels');
        if (!response.ok) {
          throw new Error('Failed to fetch recommended hotels: ' + response.statusText);
        }
        const data = await response.json();
        setRecommendedHotels(data.data);
      } catch (error) {
        console.error('Error fetching recommended hotels: ', error);
        setError(error);
      }
    };

    const fetchNewArrivals = async () => {
      try {
        const response = await fetch('https://www.juststays.in/admin/hotel/getcfhotels');
        if (!response.ok) {
          throw new Error('Failed to fetch new arrivals: ' + response.statusText);
        }
        const data = await response.json();
        setNewArrivals(data.data);
      } catch (error) {
        console.error('Error fetching new arrivals: ', error);
        setError(error);
      }
    };

    const fetchTopRatedHotels = async () => {
      try {
        const response = await fetch('https://www.juststays.in/admin/hotel/topratedhotels');
        if (!response.ok) {
          throw new Error('Failed to fetch top rated hotels: ' + response.statusText);
        }
        const data = await response.json();
        setTopRatedHotels(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top rated hotels: ', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecentHotels();
    fetchRecommendedHotels();
    fetchNewArrivals();
    fetchTopRatedHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <CaroUsel />
      {/* Recent Hotels */}
      <Container>
        <h2 className='mt-5 mb-3'>Recent Hotels</h2>
        <OwlCarousel items={5} margin={8} autoplay autoplayTimeout={3000}>
          {recentHotels.map((hotel) => (
            <div key={hotel.id}>
              <Row xs={1} className="g-4">
                <Col>
                  <Card>
                    <Card.Img variant="top" className='hotel-img' src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.hotelname}</Card.Title>
                      <Card.Text>{hotel.city_name}</Card.Text>
                      {hotel.roomtype && hotel.roomtype.length > 0 && (
                        <p className='rate'>&#8377;{hotel.roomtype[0].price}/per night</p>
                      )}
                      <Link to={`/room/${hotel.id}`} className="room-btn">View details</Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>

      {/* Recommended Hotels */}
      <Container>
        <h2 className='mt-5 mb-3'>Recommended For You</h2>
        <OwlCarousel items={5} margin={8} autoplay autoplayTimeout={3000}>
          {recommendedHotels.map((hotel) => (
            <div key={hotel.id}>
              <Row xs={1} className="g-4">
                <Col>
                  <Card>
                    <Card.Img variant="top" className='hotel-img' src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.hotelname}</Card.Title>
                      <Card.Text>{hotel.city_name}</Card.Text>
                      {hotel.roomtype && hotel.roomtype.length > 0 && (
                        <p className='rate'>&#8377;{hotel.roomtype[0].price}/per night</p>
                      )}
                      <Link to={`/room/${hotel.id}`} className="room-btn">View details</Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>

      {/* New Arrivals */}
      <Container>
        <h2 className='mt-5 mb-3'>New Arrivals</h2>
        <OwlCarousel items={5} margin={8} autoplay autoplayTimeout={3000}>
          {newArrivals.map((hotel) => (
            <div key={hotel.id}>
              <Row xs={1} className="g-4">
                <Col>
                  <Card>
                    <Card.Img variant="top" className='hotel-img' src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.hotelname}</Card.Title>
                      <Card.Text>{hotel.city_name}</Card.Text>
                      {hotel.roomtype && hotel.roomtype.length > 0 && (
                        <p className='rate'>&#8377;{hotel.roomtype[0].price}/per night</p>
                      )}
                      <Link to={`/room/${hotel.id}`} className="room-btn">View details</Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>

      {/* Top Rated Hotels */}
      <div className='mt-4'>
        <img
          className="d-block banner"
          src={require('../assets/off-banner.jpeg')}
          alt=""
        />
      </div>
      <Container>
        <h2 className='mt-5 mb-3'>Top Rated Hotels</h2>
        <OwlCarousel items={5} margin={8} autoplay autoplayTimeout={3000}>
          {topRatedHotels.map((hotel) => (
            <div key={hotel.id}>
              <Row xs={1} className="g-4">
                <Col>
                  <Card>
                    <Card.Img variant="top" className='hotel-img' src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.hotelname}</Card.Title>
                      <Card.Text>{hotel.city_name}</Card.Text>
                      {hotel.roomtype && hotel.roomtype.length > 0 && hotel.roomtype[0].price && (
                  <p className='rate'>&#8377;{hotel.roomtype[0].price}/per night</p>
                )}
                      <Link to={`/room/${hotel.id}`} className="room-btn">View details</Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </>
  );
}

export default Home;
