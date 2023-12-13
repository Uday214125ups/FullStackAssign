import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            {/* Carousel Section */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Our Website</h3>
                        <p>Discover amazing content and more.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items with different images and captions as needed */}
            </Carousel>

            {/* Review Section */}
            <h2 className="mt-5 mb-4">Customer Reviews</h2>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Customer 1</Card.Title>
                            <Card.Text>
                                "Great service and high-quality products. Will definitely
                                recommend!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Customer 2</Card.Title>
                            <Card.Text>
                                "The experience was fantastic. I love the variety they offer."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Customer 3</Card.Title>
                            <Card.Text>
                                "Friendly staff and quick delivery. I'm a satisfied customer!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Footer Section */}
            <footer className="bg-dark text-light mt-5 p-4">
                <Container fluid>
                    <Row>
                        <Col>
                            <h5>Contact Us</h5>
                            <p>Email: contact@example.com</p>
                            <p>Phone: +1 123-456-7890</p>
                        </Col>
                        <Col>
                            <h5>Follow Us</h5>
                            {/* Add social media icons or links here */}
                        </Col>
                        <Col>
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/blogs">Blogs</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
};

export default Home;
