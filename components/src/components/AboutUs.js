// AboutUs.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
    return (
        <section className="bg-light py-5">
            <Container>
                <h2 className="text-center mb-4">About Us</h2>
                <Row>
                    <Col md={6}>
                        <img
                            className="img-fluid rounded"
                            src="https://placekitten.com/600/400"
                            alt="About Us"
                        />
                    </Col>
                    <Col md={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                            quam id velit vulputate consectetur. Integer consequat bibendum
                            fermentum. Nulla facilisi. Curabitur vel pharetra turpis. Nam
                            consectetur lectus in facilisis sagittis.
                        </p>
                        <p>
                            Nullam vel orci quis felis bibendum fringilla. Duis nec ipsum
                            urna. Ut vitae eros ac dolor volutpat venenatis a in ligula. Sed
                            tristique ligula et sem tristique, eget fringilla ligula
                            fermentum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutUs;
