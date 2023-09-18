import React, { useState } from 'react';
import { Carousel, Button, Card, Row, Col } from 'react-bootstrap';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Row>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}>
              <img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}><img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body></Card>
            </Col>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}><img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body></Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}><img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body></Card>
            </Col>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}><img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body></Card>
            </Col>
            <Col lg={4} sm={6} mb={4}>
              <Card style={{ width: '18rem' }}><img
              className="card-img-top"
              src="https://via.placeholder.com/800x400?text=Profile+2"
              alt="Second slide"
            />
            <Card.Body>
              <Card.Title>Profile 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
              <Card.Text>
                Some text for the second profile card.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body></Card>
            </Col>
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>

      {/* Next and Previous Indicators */}
      {/* Next and Previous Indicators */}
      <div className="text-center mt-3">
        <Button
          variant="primary"
          onClick={() => setIndex((index + 1) % 3)}
        >
          Next
        </Button>
        {' '}
        <Button
          variant="primary"
          onClick={() => setIndex((index - 1 + 3) % 3)}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}

export default MyCarousel;
