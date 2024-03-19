import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

export class HotelList extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <OwlCarousel items={3} margin={8} responsive={{ 0: { items: 1 }, 600: { items: 3 } }}>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx}>
                <Row xs={1}  className="g-4">
                  <Col>
                    <Card>
                      <Card.Img variant="top" className='hotel-img' src={require('../assets/card7.jpg')} />
                      <Card.Body>
                        <Card.Title>Grand Beach Hotel</Card.Title>
                        <Card.Text>
                          Miami, United States of America
                        </Card.Text>
                        <p className='rate'>&#8377;350/per night</p>
                        <Link to="/room" className="room-btn">View details</Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default HotelList;
