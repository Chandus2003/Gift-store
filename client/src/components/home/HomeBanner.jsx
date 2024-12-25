import React from 'react';
import imageData from '../constant/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material/styles';

// Define styled component for the image
const StyledImage = styled('img')`
  width: 100%;
  height: 300px;
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
