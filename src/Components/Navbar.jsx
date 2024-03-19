// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Modal} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState} from 'react'
import logo from '../assets/jsutstay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [isMobileInputVisible, setMobileInputVisible] = useState(true);

  const handleClose = () => {
    setShow(false);
    setMobileInputVisible(true);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Logic to send OTP (you can replace this with your actual API call)
    // For simplicity, let's assume OTP is sent successfully
    setMobileInputVisible(false);
  };
  
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand >
          <Link exact to="/"><img src={logo} alt="" className='logo'/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/Book" className="nav-link" activeClassName="active">
              Booking
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              Hotel
            </NavLink>
            <NavLink to="/branches" className="nav-link" activeClassName="active">
              Branches
            </NavLink>
            <NavLink to="/room" className="nav-link" activeClassName="active">
              Room
            </NavLink>
            <Nav className='navn' onClick={handleShow}>
              <FontAwesomeIcon icon={faUser} />
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
     {/* Login Modal */}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSendOtp}>
            {isMobileInputVisible ? (
              <>
                <Form.Control type="tel" id="tel" placeholder="Mobile Number" /><br></br>
                <button className="otp-btn" type="submit">
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <Form.Control type="text" id="otp" placeholder="Enter OTP" /><br></br>
                <button className="otp-btn" type="submit">
                  Login
                </button>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
    
  );
}

export default NavBar;