import { useEffect, useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
        setOpen(false);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `navbar fixed z-20 w-full transition-all shadow-sm ${
    scrolled ? "py-3 bg-white shadow" : "py-4"
  }`;

  const linkClasses =
    "font-shrink opacity-80 hover:opacity-100 transition whitespace-nowrap text-sm";

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto grid grid-cols-3 items-center px-4">
        {/* left: hamburger (md & sm only), navlink (lg only) */}
        <div className="flex items-center gap-4">
          {/* hamburger (mobile + medium) */}
          <button
            onClick={toggleMenu}
            aria-label="toggle navigation"
            className="lg:hidden text-2xl"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>

          {/* nav links (only on large and up) */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {["home", "listings", "members", "blog", "pages", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} className={linkClasses}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* center: logo */}
        <div className="flex justify-center">
          <a href="#home">
            <img
              src={Logo}
              alt="logo"
              className="w-24 sm:w-28 md:w-28 lg:w-32 transition-all"
            />
          </a>
        </div>

        {/* right: action buttons (selalu tampil) */}
        <div className="flex justify-end items-center gap-2 text-xs sm:text-sm">
          <span className="hidden lg:flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-xs" /> +62 123 456 789
          </span>
          <a
            href="#user"
            className="border border-black p-1.5 sm:p-2 md:px-3 px-2 sm:px-3 rounded-full hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a
            href="#property"
            className="border border-black px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base whitespace-nowrap min-w-max"
          >
            add property
          </a>
        </div>
      </div>

      {/* mobile/medium nav links dropdown */}
      {open && (
        <nav className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {["home", "listings", "members", "blog", "pages", "contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`} className={linkClasses}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
