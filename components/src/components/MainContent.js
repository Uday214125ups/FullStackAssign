// MainContent.js

import React from 'react';
import CarouselComponent from "./CarouselComponent";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";

function MainContent() {
    return (
        <main>
            <section>
                <CarouselComponent />
                <AboutUs />
                <Reviews />
            </section>
            {/* Add more sections or components as needed */}
        </main>
    );
}

export default MainContent;
