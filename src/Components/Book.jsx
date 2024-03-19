import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function About() {
  const [bookingData, setBookingData] = useState(null);
  const [show, setShow] = useState(false);
  const userId = '12236'; // Replace '12236' with the actual user ID

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await fetch(`https://www.juststays.in/admin/user/mybookings?userid=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch booking data');
        }
        const data = await response.json();
        setBookingData(data.data[0]);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, [userId]); // Include userId in the dependency array

  const handleCancelBooking = async () => {
    try {
      const response = await fetch('https://www.juststays.in/admin/user/cancelbooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId: bookingData.bookingid }), // Assuming bookingId is required for cancelation
      });
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
      handleClose();
      // You can perform additional actions after successful booking cancellation
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  return (
    <>
      <Container>
        <Row className='p-5'>
          <Col>
            <div className='text-center'><img className='book-img' src={bookingData?.Hotelimage} alt="" width="50%" /></div>
          </Col>
          <Col>
            <h6>{bookingData?.hotel_id}</h6>
            {/* Render booking data if available */}
            {bookingData && (
              <>
                <p>{bookingData.fromdate}, Check In</p>
                <p>{bookingData.todate}, Check Out</p>
                <p> <FontAwesomeIcon icon={faLocation} /> {bookingData.city}</p>
              </>
            )}
            <button className="can-btn" onClick={handleShow}>Cancel Booking</button>
            <a className="need-btn" href="tel:9109109744">Need Help?</a>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reason for canceling booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="cancel">BOOKING CREATED BY MISTAKE</button>
          <button className="cancel">FIND A BETTER DEAL</button>
          <button className="cancel">HOTEL LOCATION NOT FOUND</button>
          <button className="cancel">MY REASON NOT LISTED</button>
          <Form.Control className='mt-2' as="textarea" rows={3} placeholder='Please Specify Reason'/>
        </Modal.Body>
        <Modal.Footer>
          <button className="need-btn" onClick={handleCancelBooking}>
            Cancel Booking
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;
