import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faFaceGrinTongueWink,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Best1 from "../../public/assets/images/best1.jpg";
import Best2 from "../../public/assets/images/best2.jpg";
import Best3 from "../../public/assets/images/best3.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const CardBest = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-5 mt-32">
      <h1 className="text-center text-2xl font-semibold mb-3">
        discover our best deals
      </h1>
      <p className="text-center text-sm mb-10">lorem ipsum dolor sit amet</p>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="flex justify-center px-2"
      >
        {[ 
          {
            img: Best1,
            title: "skyper pool apartment",
            location: "1020 bloomingdale ave",
            badge: "for sale",
            price: "$280,000",
          },
          {
            img: Best2,
            title: "north dillard street",
            location: "4330 bell shoals rd",
            badge: "for rent",
            price: "$250 / month",
          },
          {
            img: Best3,
            title: "eaton garth penthouse",
            location: "7722 18th ave, brooklyn",
            badge: "for sale",
            featured: true,
            price: "$180,000",
          },
        ].map((card, i) => (
          <div key={i} className="box w-[300px] md:w-[320px] p-5">
            <div className="relative">
              <div className="absolute p-2 px-4 m-4 bg-green-900 rounded-full">
                <h3 className="font-light text-xs text-white">{card.badge}</h3>
              </div>
              {card.featured && (
                <div className="absolute p-2 px-4 top-4 right-4 bg-amber-300 rounded-full">
                  <h3 className="font-light text-xs">featured</h3>
                </div>
              )}
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl h-[230px] w-full object-cover"
              />
            </div>
            <h3 className="font-medium mt-3 mb-2">{card.title}</h3>
            <div className="text flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              <p className="text-sm">{card.location}</p>
            </div>
            <div className="mt-5 flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <p className="mr-7">4</p>
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <p className="mr-7">2</p>
              <FontAwesomeIcon icon={faFaceGrinTongueWink} className="mr-2" />
              <p className="mr-7">450</p>
              <h1 className="ml-auto font-semibold text-sm text-red-500">
                {card.price}
              </h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardBest;
