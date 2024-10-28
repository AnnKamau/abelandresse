import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './Components/Assets/1.png'
import banner2 from './Components/Assets/2.png'
import banner3 from './Components/Assets/3.png'

const CarouselPage = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'50vh'}}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'50vh'}}
          className="d-block w-100"
          src={banner3}
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
