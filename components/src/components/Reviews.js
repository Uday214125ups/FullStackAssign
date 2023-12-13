// Reviews.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Reviews() {
    const reviewsData = [
        {
            id: 1,
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            review: 'Sed ac quam id velit vulputate consectetur. Integer consequat bibendum fermentum.',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            review: 'Nullam vel orci quis felis bibendum fringilla. Duis nec ipsum urna.',
        },
    ];

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-4">Customer Reviews</h2>
                <Row>
                    {reviewsData.map((review) => (
                        <Col key={review.id} md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>{review.review}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Reviews;
