import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";

function HomePageCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return(
        <Carousel fade activeIndex={index} onSelect={handleSelect} style={{width:"100%", maxHeight:"600px"}}>
            <Carousel.Item style={{width:"100%", maxHeight:"600px"}}>
                <img className="img-fluid" src="https://images.unsplash.com/photo-1565071783280-719b01b29912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" style={{width:"100%"}} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item style={{width:"100%", maxHeight:"600px"}}>
                <img className="img-fluid" src="https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" style={{width:"100%"}} alt="First slide" />
            </Carousel.Item>
        </Carousel>
    );

}

export default HomePageCarousel;