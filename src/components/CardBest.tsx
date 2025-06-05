import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBed, faBath, faFaceGrinTongueWink } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Best1 from '../../public/assets/images/best1.jpg'
import Best2 from '../../public/assets/images/best2.jpg'
import Best3 from '../../public/assets/images/best3.jpg'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
}

const CardBest = () => {
  const [deviceType, setDeviceType] = useState('desktop')

  useEffect(() => {
    const width = window.innerWidth
    if (width < 464) setDeviceType('mobile')
    else if (width < 1024) setDeviceType('tablet')
    else setDeviceType('desktop')
  }, [])

  return (
    <div className="w-full px-5 mt-32">
      <h1 className="text-center text-2xl font-semibold mb-3">discover our best deals</h1>
      <p className="text-center text-sm mb-10">lorem ipsum dolor sit amet</p>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
         <div className="box m-5 ml-24 w-80 relative">
          <div className="absolute p-2 px-4 m-4 bg-green-900 rounded-full">
            <h3 className="font-light text-xs text-white">for sale</h3>
          </div>
          <img src={Best1} alt="skyper pool apartment" className="rounded-xl h-[230px]" />
          <h3 className="font-medium mt-3 mb-2">skyper pool apartment</h3>
          <div className="text flex">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            <p className="text-sm">1020 bloomingdale ave</p>
          </div>
          <div className="mt-5 flex items-center">
            <FontAwesomeIcon icon={faBed} className="mr-2" />
            <p className="mr-7">4</p>
            <FontAwesomeIcon icon={faBath} className="mr-2" />
            <p className="mr-7">2</p>
            <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
            <p className="mr-7">450</p>
            <h1 className="ml-auto font-semibold text-lg text-red-500">$280,000</h1>
          </div>
        </div>

        <div className="box m-5 mx-14 w-80 relative">
          <div className="absolute p-2 px-4 m-4 bg-green-900 rounded-full">
            <h3 className="font-light text-xs text-white">for rent</h3>
          </div>
          <img src={Best2} alt="north dillard street" className="rounded-xl h-[230px]" />
          <h3 className="font-medium mt-3 mb-2">north dillard street</h3>
          <div className="text flex">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            <p className="text-sm">4330 bell shoals rd</p>
          </div>
          <div className="mt-5 flex items-center">
            <FontAwesomeIcon icon={faBed} className="mr-2" />
            <p className="mr-7">4</p>
            <FontAwesomeIcon icon={faBath} className="mr-2" />
            <p className="mr-7">2</p>
            <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
            <p className="mr-7">450</p>
            <h1 className="ml-auto font-semibold text-lg text-red-500">
              $250<span className="text-sm">/month</span>
            </h1>
          </div>
        </div>

        <div className="box m-5 ml-13 w-80 relative">
          <div className="absolute p-2 px-4 m-4 bg-green-900 rounded-full">
            <h3 className="font-light text-xs text-white">for sale</h3>
          </div>
          <div className="absolute p-2 px-4 my-4 right-4 mx-28 bg-amber-300 rounded-full">
            <h3 className="font-light text-xs">featured</h3>
          </div>
          <img src={Best3} alt="eaton garth penthouse" className="rounded-xl h-[230px]" />
          <h3 className="font-medium mt-3 mb-2">eaton garth penthouse</h3>
          <div className="text flex">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            <p className="text-sm">7722 18th ave, brooklyn</p>
          </div>
          <div className="mt-5 flex items-center">
            <FontAwesomeIcon icon={faBed} className="mr-2" />
            <p className="mr-7">4</p>
            <FontAwesomeIcon icon={faBath} className="mr-2" />
            <p className="mr-7">2</p>
            <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
            <p className="mr-7">450</p>
            <h1 className="ml-auto font-semibold text-lg text-red-500">$180,000</h1>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CardBest
