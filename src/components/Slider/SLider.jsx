import SlickSlider from 'react-slick'

// import styles from './slider.module.scss'
import '../../scss/_slick-carousel.scss'

/*
// перенес в settings.js

import {
  ReactComponent as PrevArrowSVG
} from '../../assets/images/prevArrow.svg'
import {
  ReactComponent as NextArrowSVG
} from '../../assets/images/nextArrow.svg'


const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <NextArrowSVG />
  </div>
)

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <PrevArrowSVG />
  </div>
)

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
      },
    },
  ],
}*/


const Slider = ({ className, slideComponent, slides, settings }) => {
  const Component = slideComponent

  return (
    <SlickSlider className={className} {...settings}>
      {
        slides
          .map((slide) => {
            return <Component key={slide.id || slide.date} slide={slide} />
          })
      }
    </SlickSlider>
  )
}

export default Slider
