import Logo1 from "../../public/assets/images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly bg-slate-950 py-3 text-white text-center">
      <p className="text-sm">Copyright &copy; 2024. JustHome</p>
      <img src={Logo1} alt="" className="w-40" />
      <div className="flex items-center gap-4 text-xl">
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
    </div>
  );
};

export default Footer;
