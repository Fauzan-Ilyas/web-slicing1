import { useEffect, useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  const scrollActive = scroll ? "py-4 bg-white shadow" : "py-4";

  return (
    <div
      className={`navbar z-10 fixed w-full transition-all ${scrollActive} shadow`}
    >
      <div className="container mx-auto px-4 text-xs">
        <div className="navbar-box flex items-center justify-between">
          <ul className="flex gap-6 static flex-row shadow-none bg-transparent w-auto h-full translate-y-0 md:text-black md:m-0 md:p-0 transition-none px-8 py-6 rounded">
            <li className="flex items-center gap-4">
              <a href="#home" className="font-medium opacity-75">
                Home
              </a>
              <button>
              </button>
            </li>
            <li className="flex items-center gap-4">
              <a href="#listings" className="font-medium opacity-75">
                Listings
              </a>
              <button>
              </button>
            </li>
            <li className="flex items-center gap-4">
              <a href="#members" className="font-medium opacity-75">
                Members
              </a>
              <button>
              </button>
            </li>
            <li className="flex items-center gap-4">
              <a href="#blog" className="font-medium opacity-75">
                Blog
              </a>
              <button>
              </button>
            </li>
            <li className="flex items-center gap-4">
              <a href="#pages" className="font-medium opacity-75">
                Pages
              </a>
              <button>
              </button>
            </li>
            <li className="flex items-center gap-4">
              <a href="#contact" className="font-medium opacity-75">
                Contact
              </a>
            </li>
          </ul>
          <div className="logo">
            <img src={Logo} alt="" className="w-32 mr-40" />
          </div>
          <div className="nav-right flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-sm" />
            +62 123 456 789
            <a
              href="#user"
              className="bg-transparent border border-black p-3 py-2 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a
              href="#property"
              className="bg-transparent border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all"
            >
              Add Property
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;