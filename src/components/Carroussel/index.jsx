import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carroussel({ images, slideWidth, slideHeight }) {
    const StyledCarousel = styled(Slider)`
    .slick-slide img {
      width: 100%;
      height: auto;
    }
  `;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings} style={{ width: slideWidth, height: slideHeight, marginTop: "100px", borderRadius: "10px" }}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
            ))}
        </Slider>
    );
};
