import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faKey } from "@fortawesome/free-solid-svg-icons";
import Home from "../../public/assets/images/home.jpg";

const PerfectHome = () => {
  return (
    <div className="w-full mt-32 mb-32 px-4 sm:px-8 md:px-16">
      <h1 className="text-center text-2xl font-semibold mb-3">
        How It works? Find a perfect home
      </h1>
      <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p>

      {/* layout flex dibikin stack pas mobile */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-10">
        {/* teks & ikon */}
        <div className="flex-1">
          <div className="mt-6 md:mt-12 md:mr-10">
            <FontAwesomeIcon icon={faHome} className="mr-3 text-lg text-green-900" />
            <h3 className="font-semibold text-base sm:text-lg">Find Real Estate</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="mt-8 md:mt-12 md:mr-10">
            <FontAwesomeIcon icon={faUsers} className="mr-3 text-lg text-green-900" />
            <h3 className="font-semibold text-base sm:text-lg">Meet Relator</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="mt-8 md:mt-12 md:mr-10">
            <FontAwesomeIcon icon={faKey} className="mr-3 text-lg text-green-900" />
            <h3 className="font-semibold text-base sm:text-lg">Take The Keys</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* gambar */}
        <div className="flex-1">
          <img src={Home} alt="Home" className="w-full rounded-xl object-cover max-h-[300px] md:max-h-none" />
        </div>
      </div>
    </div>
  );
};

export default PerfectHome;
