import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Adv() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-full h-10vh d-block'
        itemId={1}
        src='https://data1.ibtimes.co.in/en/full/567541/flipkart-big-app-shopping-days-sale-begins-best-deals-offers-mobiles-other-electronics.png'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-full h-10vh d-block'
        itemId={2}
        src='https://cdn.grabon.in/gograbon/images/merchant/1577878324467.png'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-full h-10vh d-block'
        itemId={3}
        src='https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart-sale-m-1664368773.png'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
