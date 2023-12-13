// CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Some description for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/401"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Some description for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/402"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>Some description for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
