import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faBed, faBath, faFaceGrinTongueWink} from '@fortawesome/free-solid-svg-icons'
import Sale1 from "../../public/assets/images/sale1.jpg"
import Sale2 from "../../public/assets/images/sale2.jpg"
import Sale3 from "../../public/assets/images/sale3.jpg"
import Sale4 from "../../public/assets/images/sale4.jpg"

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};
const CardBest = () => {
  const [deviceType, setDeviceType] = useState("desktop");
    
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 464) setDeviceType("mobile");
    else if (width < 1024) setDeviceType("tablet");
    else setDeviceType("desktop");
  }, []);

  return (
    <div className="w-full mt-32">
        <h1 className="text-center text-2xl font-semibold mb-3">Recent Properties for Sale</h1>
        <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p> 
        <div className="card flex items-center justify-center m-5 mx-20">
             <Carousel
                      swipeable={false}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr={true}
                      infinite={true}
                      autoPlay={deviceType !== "mobile"}
                      autoPlaySpeed={3000}
                      keyBoardControl={true}
                      customTransition="all .5s"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      deviceType={deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                        <div className="box m-5 w-60 relative">
                <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
                    <h3 className="font-light text-xs text-white">FOR SALE</h3>
                </div>
                <img src={Sale1} alt="" className="rounded-xl h-[200px]" />
                    <h3 className="font-medium mt-3 mb-2">Skyper Pool Apartment</h3>
                <div className="text flex">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-sm">1020 Bloomingdale Ave</p>
                </div>
                <div className="mt-5 flex items-center text-xs">
                    <FontAwesomeIcon icon={faBed} className="mr-2" />
                    <p className='mr-5'>4</p>
                    <FontAwesomeIcon icon={faBath} className="mr-2" />
                    <p className='mr-5'>2</p>
                    <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
                    <p className='mr-5'>450</p>
                    <h1 className="ml-auto font-semibold text-xs text-red-500">$280,000</h1>
                </div>
            </div>
            <div className="box m-5 w-60 relative">
                <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
                    <h3 className="font-light text-xs text-white">FOR SALE</h3>
                </div>
                 <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
                    <h3 className="font-light text-xs">FEATURED</h3>
                </div>
                <img src={Sale2} alt="" className="rounded-xl h-[200px]" />
                    <h3 className="font-medium mt-3 mb-2">Eaton Garth Penthouse</h3>
                <div className="text flex">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-sm">7722 18th Ave, Brooklyn</p>
                </div>
                <div className="mt-5 flex items-center text-xs">
                    <FontAwesomeIcon icon={faBed} className="mr-2" />
                    <p className='mr-5'>4</p>
                    <FontAwesomeIcon icon={faBath} className="mr-2" />
                    <p className='mr-5'>2</p>
                    <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
                    <p className='mr-5'>450</p>
                    <h1 className="ml-auto font-semibold text-xs text-red-500">$180,000</h1>
                </div>
            </div>
            <div className="box m-5 w-60 relative">
                <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
                    <h3 className="font-light text-xs text-white">FOR SALE</h3>
                </div>
                 <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
                    <h3 className="font-light text-xs">FEATURED</h3>
                </div>
                <img src={Sale3} alt="" className="rounded-xl h-[200px]" />
                    <h3 className="font-medium mt-3 mb-2">Diamond Manor Apartment</h3>
                <div className="text flex">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-sm">7802 20th Ave, Brooklyn</p>
                </div>
                <div className="mt-5 flex items-center text-xs">
                    <FontAwesomeIcon icon={faBed} className="mr-2" />
                    <p className='mr-5'>4</p>
                    <FontAwesomeIcon icon={faBath} className="mr-2" />
                    <p className='mr-5'>2</p>
                    <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
                    <p className='mr-5'>500</p>
                    <h1 className="ml-auto font-semibold text-xs text-red-500">$259,000</h1>
                </div>
            </div>
            <div className="box m-5 w-60 relative">
                <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
                    <h3 className="font-light text-xs text-white">FOR SALE</h3>
                </div>
                <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
                    <h3 className="font-light text-xs">FEATURED</h3>
                </div>
                <img src={Sale4} alt="" className="rounded-xl h-[200px]" />
                    <h3 className="font-medium mt-3 mb-2">Comfortable Villa Green</h3>
                <div className="text flex">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-sm">214 Kings Hwy, Brooklyn</p>
                </div>
                <div className="mt-5 flex items-center text-xs">
                    <FontAwesomeIcon icon={faBed} className="mr-2" />
                    <p className='mr-5'>4</p>
                    <FontAwesomeIcon icon={faBath} className="mr-2" />
                    <p className='mr-5'>1</p>
                    <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
                    <p className='mr-5'>450</p>
                    <h1 className="ml-auto font-semibold text-xs text-red-500">$158,000</h1>
                </div>
            </div>
                    </Carousel>
        </div>
    </div>
  )
}

export default CardBest