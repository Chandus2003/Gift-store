import React from 'react';
import imageData from '../constant/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material/styles';

// Define styled component for the image
const StyledImage = styled('img')`
  width: 100%;
  height: 300px;  // You can adjust the default height here

  @media (max-width: 1024px) {
    height: 250px;  // Adjust the height for tablets
  }

  @media (max-width: 480px) {
    height: 200px;  // Adjust the height for mobile devices
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HomeBanner() {
  return (
    <>
      <Carousel
        infinite={true}
        arrows={true}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imageData.map((data, index) => (
          <StyledImage key={index} src={data.url} alt={`banner-${index}`} />
        ))}
      </Carousel>
    </>
  );
}

export default HomeBanner;
