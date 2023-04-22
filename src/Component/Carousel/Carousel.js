import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import video1 from './video/video1.mp4';
import video2 from './video/video2.mp4';
import video3 from './video/video3.mp4';
import video4 from './video/video4.mp4';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div>
          <video src={video1} />
        </div>
        <div>
          <video src={video2} />
        </div>
        <div>
          <video src={video3} />
        </div>
        <div>
          <video src={video4} />
        </div>
        <div>
          <video src={video1} />
        </div>
        <div>
          <video src={video2} />
        </div>
        <div>
          <video src={video3} />
        </div>
        <div>
          <video src={video4} />
        </div>
        <div>
          <video src={video1} />
        </div>
        <div>
          <video src={video2} />
        </div>
        <div>
          <video src={video3} />
        </div>
        <div>
          <video src={video4} />
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;
