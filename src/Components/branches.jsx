import React from 'react';
import './Navbar.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


function Branches() {
    return (

<Container className='pb-4'>
<h2 className='mt-5 mb-3'>Top Branches</h2>
<Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col key={idx}>
      <Card>
        <Card.Img variant="top" className='hotel-img' src={require('../assets/card8.jpg')} />
        <Card.Body>
          <Card.Title>Ebury Street</Card.Title>
          <Card.Text>
          Paris, France
          </Card.Text>
          <p className='rate'>&#8377;600/per night</p>
          <a href="about" className="room-btn">View details</a>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>
);
}

export default Branches;