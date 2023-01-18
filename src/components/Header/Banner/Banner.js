import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/image1.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';



const Banner = () => {
    return (
      <div className='banner-carousel'>
        <Carousel>
      <Carousel.Item>
        <img
          className="banner-image d-block w-100"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image d-block w-100"
          src={image4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image d-block w-100"
          src={image5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image d-block w-100"
          src={image6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image d-block w-100"
          src={image1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    );
};

export default Banner;