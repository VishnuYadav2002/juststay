// AboutPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css';
function About() {
  return (
    <>
    <Container>
      <Row className='p-5'>
        <Col>
        <div><img src={require('../assets/certifiacte.jpg')} alt="" /></div>
        </Col>
        <Col>
        <h3>Enjoy a Luxury Experience</h3>
        <p>We provide accommodation services since 1990</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem assumenda dolores.</p>
        <p>Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi consequatur quae sequi ex, ipsa facere qui ut recusandae.Quod earum cupiditate quaerat assumenda</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <h3>Our Best Rooms</h3>
      <p>Our best rooms available for your vacation. </p>
      <Row>
        <Col>
        <div><img src={require('../assets/r1.jpg')} alt="" width="100%" /></div>
        </Col>
        <Col>
        <Row>
          <Col>
          <div><img src={require('../assets/r2.jpg')} alt="" width="100%" /></div>
          </Col>
          <Col>
          <div><img src={require('../assets/r3.jpg')} alt="" width="100%" /></div>
          </Col>
        </Row>
        </Col>

      </Row>
    </Container>
    <Container>
      <h3>The best places to stay</h3>
      <p>Plenty of services to assure your relaxation and comfortability.</p>
      <Row>
        <Col>
        <div><img src={require('../assets/hotel1.jpg')} alt="" width="100%" /></div>
        </Col>
        <Col>
        <Row>
        <Col sm={3}>
        <div className='text-center'><img src={require('../assets/icon1.png')} alt="" width="" /></div>
        </Col>
        <Col sm={9}>
          <h4>Swimming Pool</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin elementum porta.</p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
        <div className='text-center'><img src={require('../assets/icon2.png')} alt="" width="" /></div>
        </Col>
        <Col sm={9}>
          <h4>Restaurant</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin elementum porta.</p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
        <div className='text-center'><img src={require('../assets/icon3.png')} alt="" width="" /></div>
        </Col>
        <Col sm={9}>
          <h4>Meeting Room</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin elementum porta.</p>
        </Col>
        </Row>
        </Col>

      </Row>
    </Container>
    </>
  );
}

export default About;
