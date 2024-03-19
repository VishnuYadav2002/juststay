import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "@mui/material/Slider";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

function Room() {
    const [range, setRange] = useState([500, 7500]);
  
    const handleChanges = (event, newValue) => {
      setRange(newValue);
    }
  return (
    <Container className='mt-5 mb-4'>
      <Row>
        <Col sm={3} className='he'>
          <Row className='mt-5'>
            <Col>
            <h4>Filters</h4>
            <p><b>Price</b></p>
            </Col>
            <Col>
            <a href="# ">Clear All</a>
            </Col>
          </Row>
          <div style={{ padding: '20px' }}>
           Min Price: {range[0]} &nbsp;&nbsp; Max Price: {range[1]}
      <Slider
        value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        min={500}
        max={7500} 
        step={100}
      />
    </div><hr></hr>
      <h5>Collections</h5>
       <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'For Group Travllers'}
          />   
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'Local ID Accepted'}
          />         
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'Faimly'}
          />         
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'Welcome Couples'}
          />         
        </div>
      ))}
    </Form>
        <hr></hr>
        <h5>Hotel Facilities</h5>
        <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'TV'}
          />   
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'AC'}
          />            
        </div>
      ))}
    </Form>

        </Col>
        <Col sm={9}>
          <h1 className='pb-3'>Hotel in Noida</h1>
        <Row className='room-card'>
        <Col sm={5}  className='honey'>
          <div><img src={require('../assets/honeymoon.jpg')} alt="" width="100%" height={360} /></div>
        </Col>
        <Col sm={5} className='honey pt-3'>
          <h3>Honeymoon Suite</h3>
          <p>The Honeymoon Suite is the best choice for a fresh married couple to have a comfortable and luxurious honeymoon vacation.</p>
          <h6>Amenities</h6>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
        </Col>
        <Col sm={2}>
            <div className='room-price'>
            <p className='rate'>&#8377;600/per night</p>
            <Link to="/Hotel-book"  className="room-btn">View details</Link>
            </div>
        </Col>
      </Row>
        <Row className='mt-5 room-card'>
        <Col sm={5}  className='honey'>
          <div><img src={require('../assets/honeymoon.jpg')} alt="" width="100%" /></div>
        </Col>
        <Col sm={5} className='honey pt-3'>
          <h3>Honeymoon Suite</h3>
          <p>The Honeymoon Suite is the best choice for a fresh married couple to have a comfortable and luxurious honeymoon vacation.</p>
          <h6>Amenities</h6>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
          <div className='d-flex p-2'>
          <p><FontAwesomeIcon icon={faWifi} />  Wifi</p>
          <p className='ac'><FontAwesomeIcon icon={faWifi} />  Air Conditioner</p>
          </div>
        </Col>
        <Col sm={2}>
            <div className='room-price'>
            <p className='rate'>&#8377;600/per night</p>
          <Link to="/Hotel-book"  className="room-btn">View details</Link>
            </div>
        </Col>
      </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Room;
