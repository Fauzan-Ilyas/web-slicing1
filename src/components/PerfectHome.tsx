import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faKey } from "@fortawesome/free-solid-svg-icons";
import Home from "../../public/assets/images/home.jpg";

const PerfectHome = () => {
  return (
    <div className="w-full mt-32 mb-32">
      <h1 className="text-center text-2xl font-semibold mb-3">
        How It works? Find a perfect home
      </h1>
      <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p>
      <div className="flex justify-between mx-32">
        <div className="my-5">
          <div className="mt-12 mr-32">
            <FontAwesomeIcon icon={faHome} className="mr-3" />
            <h3 className="font-semibold">Find Real Estate</h3>
            <p className="text-sm">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="mt-12 mr-32">
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            <h3 className="font-semibold">Meet Relator</h3>
            <p className="text-sm">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="mt-12 mr-32">
            <FontAwesomeIcon icon={faKey} className="mr-3" />
            <h3 className="font-semibold">Take The Keys</h3>
            <p className="text-sm">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
        <img src={Home} alt="" className="w-1/2 rounded-xl" />
      </div>
    </div>
  );
};

export default PerfectHome;
