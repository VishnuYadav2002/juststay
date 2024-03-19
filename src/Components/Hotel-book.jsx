// AboutPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Col from 'react-bootstrap/Col';
import './Navbar.css';
import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

function HotelBook() {

    const [startDate1, setStartDate1] = useState(null);
    const [startDate2, setStartDate2] = useState(null);
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [totalDays, setTotalDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const handleCalculate = () => {
      if (startDate1 && startDate2) {
        const days = Math.ceil((startDate2 - startDate1) / (1000 * 60 * 60 * 24));
        setTotalDays(days);
  
        // You can adjust the pricing logic based on your requirements
        const roomPricePerNight = 100; // Adjust this value based on your pricing
        const calculatedTotalPrice = days * numberOfRooms * roomPricePerNight;
        setTotalPrice(calculatedTotalPrice);
      }
    };

    // const [startDate1, setStartDate1] = useState(null);
    // const [startDate2, setStartDate2] = useState(null);
  return (
    <>
    <Container className='m-5'>
      <Row className=' room-card'>
        <Col className='honey'>
        <div><img src={require('../assets/branch1.jpg')} alt=""  width="100%" height={260}/></div>
        </Col>
        <Col className='honey'>
        <h5>Description</h5>
        <p>
        Close Proximity to Red Fort, Lotus Temple, Qutub Minar & More. Luggage Storage Available. Centrally Located Next to Delhi's Popular Shopping Malls. Connected by NH8 to Cyber City.
        </p>
        <p className='rate'>&#8377;600/per night</p>
        <p><FontAwesomeIcon icon={faLocation} />  30km away from your location</p>
        </Col>
        <Col className='honey'>
        <h5>Aminities</h5>
        <div className='d-flex'>
        <p><FontAwesomeIcon icon={faLocation} /> Wifi </p>
        <p className='ac'><FontAwesomeIcon icon={faLocation} /> Air Conditioner</p>
        </div>
        <div className='d-flex'>
        <p><FontAwesomeIcon icon={faLocation} /> Televison </p>
        <p className='water'><FontAwesomeIcon icon={faLocation} /> Water Geyser</p>
        </div>
        <div className='d-flex'>
        <p><FontAwesomeIcon icon={faLocation} /> Laundry  </p>
        <p className='telephone'><FontAwesomeIcon icon={faLocation} /> Telephone</p>
        </div>
        <div className='d-flex'>
        <p><FontAwesomeIcon icon={faLocation} /> Unmarried <br></br><span className='id'>Couple</span></p>
        <p className='local'><FontAwesomeIcon icon={faLocation} />  Local ID <br></br><span className='id'>Allowed</span></p>
        </div>
        <h6>Have you a promo code?</h6>
        <form >
        <Form.Control placeholder="Enter Code" />
        <button class="apply-btn">Apply</button>
        </form>
        </Col>
        <Col className='honey'>
        <h5 className='mb-4'>For Dates & Guests</h5>
        <from>
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
      <Form.Select className='mt-2'
        aria-label="Default select example"
        onChange={(e) => setNumberOfRooms(parseInt(e.target.value))}
      >
        <option>select Rooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <button className="sub-bt" type="button" onClick={handleCalculate}>
        Submit
      </button>
      <div className='mt-3'>
        <p>Total Days: {totalDays}</p>
        <p>Total Price: &#8377;{totalPrice}</p>
      </div>
        </from>
        <button class="pay-btn">Pay Now</button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default HotelBook;
