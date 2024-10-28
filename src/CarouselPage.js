import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner2 from './Components/Assets/banner2.jpg'
import banner3 from './Components/Assets/banner3.webp'
import banner5 from './Components/Assets/banner5.jpg'

const CarouselPage = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPage
