// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </Col>
                    <Col md={3}>
                        <h5>Newsletter</h5>
                        <p>Subscribe to our newsletter for updates.</p>
                        {/* Add a subscription form or link to a subscription page */}
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3">
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;