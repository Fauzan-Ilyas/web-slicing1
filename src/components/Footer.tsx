import Logo1 from "../../public/assets/images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-slate-950 py-3 text-white text-center flex flex-col md:flex-row items-center justify-evenly">
      <p className="text-sm">Copyright &copy; 2024. JustHome</p>
      <img src={Logo1} alt="" className="w-40 my-2 md:my-0 mx-10" />
      <div className="flex items-center gap-6 text-xl mt-2 md:mt-0">
        <a href="https://github.com/Fauzan-Ilyas">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a href="https://instagram.com/anda_2030">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-fauzan-330b22352">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>

      {/* scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-blue-600 hover:bg-blue-800 text-white px-3 py-2  rounded-full shadow-lg transition-all duration-300"
        aria-label="Scroll to Top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default Footer;
