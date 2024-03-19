import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'

function HotelList() {
  return (
    <Container>
      <Row>
        <Col sm={1}>
            <Container >
              <img src={require('../assets/h1.jpg')} alt=""  className="img-first"/>
            </Container>
        </Col>
        <Col sm={11}>
            <ul className="hotel-name">
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
                <li>
                    <img src={require('../assets/h1.jpg')} alt=""  ClassName="img-fluid"/>
                     <p className="text-center">Dehli</p>
                </li>
               
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelList;