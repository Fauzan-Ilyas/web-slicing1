import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faFaceGrinTongueWink,
} from "@fortawesome/free-solid-svg-icons";
import Sale1 from "../../public/assets/images/sale1.jpg";
import Sale2 from "../../public/assets/images/sale2.jpg";
import Sale3 from "../../public/assets/images/sale3.jpg";
import Sale4 from "../../public/assets/images/sale4.jpg";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const CardSale = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 640) setDeviceType("mobile");
    else if (width < 1024) setDeviceType("tablet");
    else setDeviceType("desktop");
  }, []);

  return (
    <div className="w-full mt-32">
      <h1 className="text-center text-2xl font-semibold mb-3">
        Recent Properties for Sale
      </h1>
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
          itemClass="flex justify-center"
        >
          {/* card 1 */}
          <div className="box m-5 w-60 relative">
            <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
              <h3 className="font-light text-xs text-white">FOR SALE</h3>
            </div>
            <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
              <h3 className="font-light text-xs">FEATURED</h3>
            </div>
            <img src={Sale1} alt="" className="rounded-xl h-[200px]" />
            <h3 className="font-medium mt-3 mb-2">New Apartment Nice Wiew</h3>
            <div className="text flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              <p className="text-sm">42 Avenue O, Brooklyn</p>
            </div>
            <div className="mt-5 flex items-center text-xs">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <p className="mr-5">4</p>
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <p className="mr-5">1</p>
              <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
              <p className="mr-5">460</p>
              <h1 className="ml-auto font-semibold text-xs text-red-500">
                $850<span className="font-light">/month</span>
              </h1>
            </div>
          </div>

          {/* card 2 */}
          <div className="box m-5 w-60 relative">
            <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
              <h3 className="font-light text-xs text-white">FOR SALE</h3>
            </div>
            <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
              <h3 className="font-light text-xs">FEATURED</h3>
            </div>
            <img src={Sale2} alt="" className="rounded-xl h-[200px]" />
            <h3 className="font-medium mt-3 mb-2">Villa Garden With Pool</h3>
            <div className="text flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              <p className="text-sm">6822 Bay Pkwy, Brooklyn</p>
            </div>
            <div className="mt-5 flex items-center text-xs">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <p className="mr-5">3</p>
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <p className="mr-5">1</p>
              <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
              <p className="mr-5">350</p>
              <h1 className="ml-auto font-semibold text-xs text-red-500">
                $350<span className="font-light">/month</span>
              </h1>
            </div>
          </div>

          {/* card 3 */}
          <div className="box m-5 w-60 relative">
            <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
              <h3 className="font-light text-xs text-white">FOR SALE</h3>
            </div>
            <div className="absolute p-2 px-3 my-3 mx-24 bg-amber-300 rounded-full">
              <h3 className="font-light text-xs">FEATURED</h3>
            </div>
            <img src={Sale3} alt="" className="rounded-xl h-[200px]" />
            <h3 className="font-medium mt-3 mb-2">Ely Parkway Apartment</h3>
            <div className="text flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              <p className="text-sm">7722 18th Ave, Brooklyn</p>
            </div>
            <div className="mt-5 flex items-center text-xs">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <p className="mr-5">4</p>
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <p className="mr-5">1</p>
              <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
              <p className="mr-5">560</p>
              <h1 className="ml-auto font-semibold text-xs text-red-500">
                $5,800<span className="font-light">/month</span>
              </h1>
            </div>
          </div>

          {/* card 4 */}
          <div className="box m-5 w-60 relative">
            <div className="absolute p-2 px-3 m-3 bg-green-900 rounded-full">
              <h3 className="font-light text-xs text-white">FOR SALE</h3>
            </div>
            <img src={Sale4} alt="" className="rounded-xl h-[200px]" />
            <h3 className="font-medium mt-3 mb-2">Modern Elegant Apartment</h3>
            <div className="text flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              <p className="text-sm">1458 W Taylor St</p>
            </div>
            <div className="mt-5 flex items-center text-xs">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <p className="mr-5">4</p>
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <p className="mr-5">1</p>
              <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
              <p className="mr-5">300</p>
              <h1 className="ml-auto font-semibold text-xs text-red-500">
                $590<span className="font-light">/month</span>
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CardSale;
