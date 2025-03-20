import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap'
import './App.css'
import Navv from './components/nav/Naav'
import Recentsearches from './components/recent-searches/Recentsearches'
import bannerBg from './assets/Banner  Background.png'
import parisImage from './assets/ParisImage.png'
import greeceImage from './assets/GreeceImage.png'
import norwayImage from './assets/NorwayImage.png'
import tuscanyImage from './assets/TuscanyImage.png'
import baliImage from './assets/unsplash_5MV818tzxeo.png'
import swissImage from './assets/SwitzerlandImage.png'
import boracayImage from './assets/BoracayImage.png'
import palawanImage from './assets/PalawanImage.png'
// Import subscribe section CSS
import './components/subscribe-section/SubscribeSection.css'
// Import hotel images
import matterhornImage from './assets/Matterhorn Suites Image.png'
import discoveryImage from './assets/Discovery Shores Image.png'
import arcticHutImage from './assets/Arctic Hut Image.png'
import lakeLouiseImage from './assets/Lake Louise Image.png'
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faPlane, faCar, faShip, faHiking, faUtensils, faStar } from '@fortawesome/free-solid-svg-icons'
// Add these imports for social media icons
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="min-vh-150 d-flex flex-column">
      <Navv/>
      <header className="text-white py-5 w-100" style={{
        backgroundColor:'rgb(44, 97, 212)',
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '820px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container fluid className="px-md-5 w-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="h3 mb-4 text-center">Let's explore & travel the world</h1>
          <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '800px' }}>
            <h2 className="h5 mb-4 text-dark fw-bold">SEARCH FLIGHTS</h2>
            <Form>
              <div className="d-flex mb-4">
                <div className="form-check form-check-inline me-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="return"
                    name="tripType"
                  />
                  <label className="form-check-label text-dark" htmlFor="return">
                    Return
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="one-way"
                    name="tripType"
                    defaultChecked
                  />
                  <label className="form-check-label text-dark" htmlFor="one-way">
                    One-way
                  </label>
                </div>
              </div>
              <Row className="g-3">
                <Col lg={3} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-muted small">Departure</Form.Label>
                    <Form.Control type="text" placeholder="Singapore (SIN)" className="border rounded py-2" />
                  </Form.Group>
                </Col>
                <Col lg={3} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-muted small">Arrival</Form.Label>
                    <Form.Control type="text" placeholder="Los Angeles (LA)" className="border rounded py-2" />
                  </Form.Group>
                </Col>
                <Col lg={3} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-muted small">Date</Form.Label>
                    <Form.Control type="text" placeholder="01/05/2022" className="border rounded py-2" />
                  </Form.Group>
                </Col>
                <Col lg={3} md={6} className="d-flex align-items-end">
                  <Button variant="warning" className="w-100 text-white fw-bold py-2" style={{ backgroundColor: '#FF8B00' }}>SEARCH FLIGHTS</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </header>

      <div className="container mt-4">
      <h2 className="osaid">Recent Searches</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center mb-4">
          <Recentsearches des="SIN" des1="LAX" des2=" 7 Sep 2021" />
        </div>
        <div className="col-md-6 d-flex justify-content-center mb-4">
          <Recentsearches des="MY" des1="DUB" des2=" 9 Sep 2021" />
        </div>
        </div>
    </div>

      <Container fluid className="py-5 px-md-5 w-100" >
        <section className="mb-5">
          <h2 className="h4 mb-4">Prepare for Your Trip</h2>
          <Row className="g-4">
            {[
              { name: 'Hotels', icon: faHotel },
              { name: 'Flights', icon: faPlane },
              { name: 'Cars', icon: faCar },
              { name: 'Cruises', icon: faShip },
              { name: 'Activities', icon: faHiking },
              { name: 'Restaurants', icon: faUtensils }
            ].map((item, index) => (
              <Col key={index} xs={4} sm={2} lg={2}>
                <Card className="text-center border-0 bg-white shadow-sm h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <FontAwesomeIcon icon={item.icon} size="2x" className="text-primary" />
                    </div>
                    <Card.Text>{item.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">Most Popular Destinations</h2>
            <Nav.Link href="#" className="text-primary">View all destinations</Nav.Link>
          </div>
          <Row className="g-4">
            {[
              { name: 'Paris', price: '$699', image: 'paris.jpg' },
              { name: 'Greece', price: '$1079', image: 'greece.jpg' },
              { name: 'Norway', price: '$895', image: 'norway.jpg' },
              { name: 'Tuscany', price: '$1245', image: 'tuscany.jpg' },
            ].map((destination, index) => (
              <Col key={index} sm={6} lg={3} xl={3}>
                <Card className="h-60 border-rounded shadow-sm overflow-hidden position-relative">
                  <div style={{
                    backgroundImage: `url(${destination.image === 'paris.jpg' ? parisImage :
                      destination.image === 'greece.jpg' ? greeceImage :
                      destination.image === 'norway.jpg' ? norwayImage : tuscanyImage
                    })`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    transform: 'scale(1)',
                    cursor: 'pointer',
                    position: 'relative',
                    borderRadius:'10px'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  >
                    <div className="position-absolute" style={{
                      top: '15px',
                      left: '15px',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
                    }}>
                      {destination.name}
                    </div>
                    <div className="position-absolute d-flex flex-column align-items-end" style={{
                      bottom: '15px',
                      right: '15px',
                      color: 'white',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
                    }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', opacity: 0.9 }}>FROM</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{destination.price}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">Recommended Holidays</h2>
            <Nav.Link href="#" className="text-primary">View all holidays</Nav.Link>
          </div>
          <Row className="g-4">
            {[
              { name: 'Bali', price: '$899', nights: '4D3N', image: 'bali.jpg' },
              { name: 'Swiss', price: '$900', nights: '6D5N', image: 'swiss.jpg' },
              { name: 'Boracay', price: '$699', nights: '5D4N', image: 'boracay.jpg' },
              { name: 'Palawan', price: '$789', nights: '4D3N', image: 'palawan.jpg' },
            ].map((holiday, index) => (
              <Col key={index} sm={6} lg={3} xl={3}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden position-relative">
                  <div style={{
                    backgroundImage: `url(${holiday.image === 'bali.jpg' ? baliImage :
                      holiday.image === 'swiss.jpg' ? swissImage :
                      holiday.image === 'boracay.jpg' ? boracayImage : palawanImage
                    })`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    transform: 'scale(1)',
                    cursor: 'pointer',
                    borderRadius: '10px'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  />
                  <div className="d-flex justify-content-between align-items-center px-2 py-2">
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{holiday.name}</div>
                      <div style={{ fontSize: '14px', color: '#6c757d' }}>{holiday.nights}</div>
                    </div>
                    <div style={{ color: '#1262AE', fontWeight: 'bold', fontSize: '18px' }}>{holiday.price}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">Popular Stays</h2>
            <Nav.Link href="#" className="text-primary">View all stays <span>→</span></Nav.Link>
          </div>
          <Row className="g-4">
            {[
              { name: 'Entire bungalow', title: 'Matterhorn Suites', price: '$575/night', rating: 4.9, reviews: 60, image: matterhornImage },
              { name: '2-Story beachfront suite', title: 'Discovery Shores', price: '$360/night', rating: 4.8, reviews: 116, image: discoveryImage },
              { name: 'Single deluxe hut', title: 'Arctic Hut', price: '$420/night', rating: 4.7, reviews: 78, image: arcticHutImage },
              { name: 'Deluxe King Room', title: 'Lake Louise Inn', price: '$244/night', rating: 4.6, reviews: 63, image: lakeLouiseImage },
            ].map((hotel, index) => (
              <Col key={index} sm={6} lg={3} xl={3}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden position-relative">
                  <div style={{
                    backgroundImage: `url(${hotel.image})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    transform: 'scale(1)',
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  >
                    <div className="position-absolute" style={{
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Button variant="link" className="p-0 m-0" style={{ color: '#1262AE' }}>
                        <FontAwesomeIcon icon={faHotel} />
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <small className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>{hotel.name}</small>
                    <Card.Title className="h5 mb-2" style={{ fontWeight: 'bold', fontSize: '18px' }}>{hotel.title}</Card.Title>
                    <Card.Text className="fw-bold mb-2" style={{ color: '#1262AE', fontSize: '16px' }}>{hotel.price}</Card.Text>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faStar} className="text-warning me-1" style={{ fontSize: '14px' }} />
                      <span className="fw-bold me-1" style={{ fontSize: '14px' }}>{hotel.rating}</span>
                      <small className="text-muted" style={{ fontSize: '14px' }}>({hotel.reviews} reviews)</small>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline-primary" size="sm" className="w-100" style={{ borderColor: '#1262AE', color: '#1262AE' }}>MORE DETAILS</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <section className="subscribe-section text-white py-5 h-900">
        <Container className="" style={{ maxWidth: '600px', padding:'2rem'}}>
          <h6 className="text-primary mb-2 text-center">SUBSCRIBE TO OUR NEWSLETTER</h6>
          <h2 className="mb-4 text-dark text-center">Get weekly updates</h2>
          <Card className="p-4">
            <Card.Body>
              <p className="text-dark mb-4 text-center">Fill in your details to join the party!</p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    className="mb-3"
                  />
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button 
                    variant="warning" 
                    className=""
                    style={{ backgroundColor: '#FF8B00', width: 'auto', minWidth: '120px' }}
                  >
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <footer className="footer-section py-4" style={{
        backgroundColor: 'rgb(1, 44, 100)',
        backgroundImage: 'linear-gradient(91.74deg, #0B5BA8 30.91%, #299BD8 100.98%)',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        <Container fluid className="px-md-5">
          <Row className="g-4 mt-4">
            <Col md={3} className="text-left">
              <h5 className="mb-3 text-white fw-bold">FickleFlight</h5>
              <p className="text-white mb-3">Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</p>
              <div className="d-flex gap-2">
                <a href="#" className="text-white bg-white bg-opacity-25 d-flex align-items-center justify-content-center rounded-circle" style={{width: "32px", height: "32px"}}>
                <FontAwesomeIcon icon={faInstagram} size="sm" />                
                </a>
                <a href="#" className="text-white bg-white bg-opacity-25 d-flex align-items-center justify-content-center rounded-circle" style={{width: "32px", height: "32px"}}>
                <FontAwesomeIcon icon={faFacebookF} size="sm" />
                </a>
                <a href="#" className="text-white bg-white bg-opacity-25 d-flex align-items-center justify-content-center rounded-circle" style={{width: "32px", height: "32px"}}>
                <FontAwesomeIcon icon={faTwitter} size="sm" />                
                </a>
              </div>
            </Col>
            
            <Col md={3} className="text-left">
              <h5 className="mb-3 text-white fw-bold">Company</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white px-0 py-1">About Us</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">News</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Careers</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">How we work</Nav.Link>
              </Nav>
            </Col>
            <Col md={3} className="text-left">
              <h5 className="mb-3 text-white fw-bold">Support</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white px-0 py-1">Account</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Support Center</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">FAQ</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Accessibility</Nav.Link>
              </Nav>
            </Col>
            <Col md={3} className="text-left">
              <h5 className="mb-3 text-white fw-bold">More</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white px-0 py-1">Covid Advisory</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Airline Fees</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Tips</Nav.Link>
                <Nav.Link href="#" className="text-white px-0 py-1">Quarantine Rules</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App
