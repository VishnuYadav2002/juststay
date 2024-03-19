import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css';
function Footer() {
  return (
    <Container fluid className='footer'>
      <Row className='p-5'>
        <Col>
        <h6>COMPANY</h6>
        <ul>
            <li className='list'><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Become A Partner</a></li>
            <li><a href="#contact">Blog</a></li>
            <li><a href="#contact">Rewards</a></li>
            <li><a href="#contact">Work with Us</a></li>
        </ul>
        </Col>
        <Col>
        <h6>SUPPORT</h6>
        <ul>
            <li className='list'><a href="#contact">Account</a></li>
            <li><a href="#contact">About Us</a></li>
            <li><a href="#contact">Legal</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col>
        <h6>TOP CITIES</h6>
        <ul>
            <li className='list'><a href="#contact">Chicago</a></li>
            <li><a href="#contact">New York</a></li>
            <li><a href="#contact">San Francisco</a></li>
            <li><a href="#contact">California</a></li>
            <li><a href="#contact">Ohio</a></li>
        </ul>
        </Col>
        <Col>
         <h1>Juststay</h1>
         <p><b>Address:</b> Lorem ipsum, 24</p>
         <p><b>Phone:</b>+91 22575484478</p>
         <p><b>Email:</b> hotel@gmail.com</p>
        </Col>
      </Row>
      <p className='text-center'>Copyright © 2023. All Rights Reserved</p>
    </Container>
  );
}

export default Footer;