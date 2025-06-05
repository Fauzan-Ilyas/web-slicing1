import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import City1 from "../../public/assets/images/city1.jpg"
import City2 from "../../public/assets/images/city2.jpg"
import City3 from "../../public/assets/images/city3.jpg"
import City4 from "../../public/assets/images/city4.jpg"
import City5 from "../../public/assets/images/city5.jpg"

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, slidesToSlide: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
}
const CardProperties = () => {
    const [deviceType, setDeviceType] = useState('desktop')

    useEffect(() => {
    const width = window.innerWidth
    if (width < 464) setDeviceType('mobile')
    else if (width < 1024) setDeviceType('tablet')
    else setDeviceType('desktop')
    }, [])

  return (
    <div className="w-full mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Explore Cities</h1>
        <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p> 
        <div className="card flex items-center justify-center m-5 mx-20">
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
                     <div className="box m-5 w-44">
                <img src={City1} alt="" className="rounded-xl" />
                <div className="p-1 text-sm">
                    <p className="text-xs">2 Properties</p>
                    <h3 className="font-semibold">Chicago</h3>
                </div>
            </div>
            <div className="box m-5 w-44">
                <img src={City2} alt="" className="rounded-xl" />
                <div className="p-1 text-sm">
                    <p className="text-xs">1 Property</p>
                    <h3 className="font-semibold">Los Angeles</h3>
                </div>
            </div>
            <div className="box m-5 w-44">
                <img src={City3} alt="" className="rounded-xl" />
                <div className="p-1 text-sm">
                    <p className="text-xs">2 Properties</p>
                    <h3 className="font-semibold">Miami</h3>
                </div>
            </div>
            <div className="box m-5 w-44">
                <img src={City4} alt="" className="rounded-xl" />
                <div className="p-1 text-sm">
                    <p className="text-xs">3 Properties</p>
                    <h3 className="font-semibold">Florida</h3>
                </div>
            </div>
            <div className="box m-5 w-44">
                <img src={City5} alt="" className="rounded-xl" />
                <div className="p-1 text-sm">
                    <p className="text-xs">8 Properties</p>
                    <h3 className="font-semibold">New York</h3>
                </div>
            </div>
                  </Carousel>
           
        </div>
    </div>
  )
}

export default CardProperties